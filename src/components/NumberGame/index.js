import React, { useState } from "react";
import "./index.css";

// Exercice : * Create a React component called NumberGame that displays a random integer between 1 and 100, inclusive.
// The user can input their guess in an input field and click a button to submit their guess.
// If the guess is correct, display a message that says "You win!".
// If the guess is incorrect, display a message that says "Try again!" and update the display to show whether the guess was too high or too low.
// The user should be able to keep guessing until they get the correct answer.

const RANDOM_INT = Math.floor(Math.random() * 100) + 1;

const NumberGame = () => {
  const [number, _] = useState(RANDOM_INT);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    const parseGuess = parseInt(guess);
    if (parseGuess === number) {
      setMessage("You win !");
    } else if (parseGuess > number) {
      setMessage("Try again! Your guess was to high.");
    } else if (parseGuess < number) {
      setMessage("Try again! Your guess was to low.");
    }
  };
  const messageStyle =
    message === "You win !" ? "green-message" : "red-message";

  return (
    <div className="number-game-container">
      <h1 className="title">Number Game</h1>
      <p>Guess a number between 1 to 100 : </p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        max={100}
        min={0}
      />
      <br />
      <button onClick={handleGuess}>Submit</button>
      {message && <p className={messageStyle}>{message}</p>}
    </div>
  );
};

export default NumberGame;
