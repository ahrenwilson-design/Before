const button = document.getElementById("submit");
const input = document.getElementById("input");
const output = document.getElementById("output");
const sentences = [
  "This doesn’t need to impress everyone to be worth sharing.",
  "I can let this exist without defending it.",
  "Sharing is part of thinking, not a verdict on my ability.",
  "I don’t need certainty to press publish.",
  "This is one step, not a final statement.",
  "I’m allowed to be seen before I’m finished.",
  "This can be honest without being perfect.",
  "I can share this without predicting the outcome.",
  "I trust my intent, even if the response is unclear.",
  "This reflects where I am, not my entire capacity.",
  "I don’t have to pre-empt misunderstanding.",
  "This is an offering, not a performance.",
  "I can stand by this without overexplaining.",
  "It’s okay if this lands differently than I imagine.",
  "This doesn’t need consensus to be real."
];

let remainingSentences = [...sentences];

button.addEventListener("click", () => {
  // Reset once all sentences are used
  if (remainingSentences.length === 0) {
    remainingSentences = [...sentences];
  }

  const index = Math.floor(Math.random() * remainingSentences.length);
  const sentence = remainingSentences.splice(index, 1)[0];

  output.textContent = sentence;
});
