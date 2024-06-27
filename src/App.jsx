import React, { useState } from 'react';
import { Footer } from './Footer.jsx';
import './style.css';

export default function App() {
  const [sentence, setSentence] = useState('Can you hear me?');
  const [randomRoll, setRandomRoll] = useState(0);

  function chooseMessage(randomNumber) {
    if (randomNumber < 0.1) {
      return new window.SpeechSynthesisUtterance(
        "YOU CAN'T TELL ME WHAT TO DO!"
      );
    } else {
      return new window.SpeechSynthesisUtterance(sentence);
    }
  }

  function handleSayClicked() {
    const newRandomRoll = Math.random();
    const utterance = chooseMessage(newRandomRoll);
    speechSynthesis.speak(utterance);
    setRandomRoll(newRandomRoll);
  }

  function handleInputChange(event) {
    setSentence(event.target.value);
  }

  return (
    <div className="main">
      <h1>Web Speech API demo</h1>

      <input value={sentence} onChange={handleInputChange} />

      <button onClick={handleSayClicked}>Say it!</button>

      <Footer />
    </div>
  );
}
