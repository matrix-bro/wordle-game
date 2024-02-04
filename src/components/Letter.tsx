import { useContext } from "react";
import { AppContext } from "../context/AppContextLayout";

type Props = {
  attemptPosition: number;
  letterPosition: number;
};

const Letter = ({ attemptPosition, letterPosition }: Props) => {
  const { board, currentAttempt, correctWord } = useContext(AppContext);

  // after typing letters, it will store letters in the board accordingly, and we can access the letter from the board
  const letter = board[attemptPosition][letterPosition];

  // check if the letter is correct
  const correct = correctWord.toUpperCase()[letterPosition] === letter;

  // if not correct, check if the correctWord contains the letter
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  // if correct then display green, if almost correct then display orange
  const letterState =
    currentAttempt.attempt > attemptPosition &&
    (correct ? "bg-green-400" : almost ? "bg-orange-400" : "bg-gray-200");

  return (
    <>
      <button
        className={`bg-gray-200 rounded-md w-12 h-12 text-3xl ${letterState}`}
        onClick={() => console.log(attemptPosition, letterPosition)}
      >
        {letter}
      </button>
    </>
  );
};

export default Letter;
