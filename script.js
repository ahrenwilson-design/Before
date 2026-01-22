const button = document.getElementById("submit");
const input = document.getElementById("input");
const output = document.getElementById("output");

const sentences = [
  { id: 1, text: "This doesn’t need to impress everyone to be worth sharing." },
  { id: 2, text: "I can let this exist without defending it." },
  { id: 3, text: "Sharing is part of thinking, not a verdict on my ability." },
  { id: 4, text: "I don’t need certainty to press publish." },
  { id: 5, text: "This is one step, not a final statement." },
  { id: 6, text: "I’m allowed to be seen before I’m finished." },
  { id: 7, text: "This can be honest without being perfect." },
  { id: 8, text: "I can share this without predicting the outcome." },
  { id: 9, text: "I trust my intent, even if the response is unclear." },
  { id: 10, text: "This reflects where I am, not my entire capacity." },
  { id: 11, text: "I don’t have to pre-empt misunderstanding." },
  { id: 12, text: "This is an offering, not a performance." },
  { id: 13, text: "I can stand by this without overexplaining." },
  { id: 14, text: "It’s okay if this lands differently than I imagine." },
  { id: 15, text: "This doesn’t need consensus to be real." }
];

let remainingSentences = [...sentences];

button.addEventListener("click", () => {
  if (!input.value.trim()) {
    output.textContent = "";
    return;
  }

  if (remainingSentences.length === 0) {
    remainingSentences = [...sentences];
  }

  const index = Math.floor(Math.random() * remainingSentences.length);
  const selected = remainingSentences.splice(index, 1)[0];

  output.textContent = selected.text;
});
