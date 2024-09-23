function speak() {
    const textToSpeak = document.getElementById('text').textContent; 
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    speechSynthesis.speak(utterance);
}

const inputText = document.getElementById('inputText');
const speakButton = document.getElementById('speakButton');

const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

speakButton.addEventListener('click', () => {
  utterance.text = inputText.value;
  synth.speak(utterance);
});