const button = document.getElementById("submit");
const input = document.getElementById("input");
const output = document.getElementById("output");

const responses = [
  "If this is honest, it’s already enough.",
  "You’re sharing to express, not to be approved.",
  "Not everyone has to see themselves in it for it to matter.",
  "Let it be what it is. That’s enough."
];

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) {
    output.textContent = "Write something first.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * responses.length);
  output.textContent = responses[randomIndex];
});
