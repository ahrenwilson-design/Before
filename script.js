document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const button = document.getElementById("submit");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    const text = input.value.trim();

    if (!text) {
      output.innerText = "Pause. What are you about to share?";
      return;
    }

    output.innerText = "Before you share this, ask yourself: is it true, necessary, and kind?";
  });
});
