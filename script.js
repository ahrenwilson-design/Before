const button = document.getElementById("submit");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) {
    output.textContent = "Write something first.";
    return;
  }

  // Simple v1 response (no AI yet)
  output.textContent =
    "Before you share, pause. Say it clearly, kindly, and only if it moves the moment forward.";
});
