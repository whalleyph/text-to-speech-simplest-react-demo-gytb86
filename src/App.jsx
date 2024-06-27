import React, { useState } from 'react';
import { Footer } from './Footer.jsx';
import './style.css';

export default function App() {
  const [sentence, setSentence] = useState('Can you hear me?');

  function handleSayClicked() {
    const utterance = new SpeechSynthesisUtterance(
      "YOU CAN'T TELL ME WHAT TO DO. Just kidding!" + sentence
    );
    speechSynthesis.speak(utterance);
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
