const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output = document.getElementById('output');

function generateSentence(text) {
  if (!text.trim()) {
    return "Please enter something before you share.";
  }
  return `Take a deep breath: "${text}" — you're ready to share.`;
}

submit.addEventListener('click', () => {
  const userInput = input.value;
  const sentence = generateSentence(userInput);
  output.textContent = sentence;
});
