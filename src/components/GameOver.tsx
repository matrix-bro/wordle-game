import { useContext } from "react";
import { AppContext } from "../context/AppContextLayout";

const GameOver = () => {
  const { gameOver, correctWord, currentAttempt } = useContext(AppContext);

  return (
    <>
      <div className="text-center text-xl space-y-2">
        <h2 className="text-2xl font-bold">
          Correct Word:{" "}
          <span className="text-green-600">{correctWord.toUpperCase()}</span>
        </h2>
        <h2>
          {gameOver.guessedWord
            ? "Congratulations. You correctly guessed the word."
            : "Sorry, you failed to guess the word. Try again!"}
        </h2>

        {gameOver.guessedWord && (
          <h3>You guessed in {currentAttempt.attempt} attempt(s).</h3>
        )}
      </div>
    </>
  );
};

export default GameOver;
