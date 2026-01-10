export default async function handler(req, res) {
  const { text } = req.body;

  const systemPrompt = `
You are rewriting the user’s internal self-talk into a single, calm, believable sentence in their own voice.

Constraints:
- Output exactly one sentence
- 8–20 words
- No advice, no explanations
- No identity claims
- No outcome promises
- Neutral, grounded, forward-permitting
- Sounds like the user on a good day

Return only the sentence.
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text }
      ],
      temperature: 0.4
    })
  });

  const data = await response.json();
  const sentence = data.choices?.[0]?.message?.content;

  res.status(200).json({ sentence });
}
