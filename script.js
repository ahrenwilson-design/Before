const button = document.getElementById("submit");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;

  output.textContent = "…";

  const response = await fetch("/api/sentence", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await response.json();
  output.textContent = data.sentence || "Something went wrong.";
});
