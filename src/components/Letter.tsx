import { useContext } from "react";
import { AppContext } from "../context/AppContextLayout";

type Props = {
  attemptPosition: number;
  letterPosition: number;
};

const Letter = ({ attemptPosition, letterPosition }: Props) => {
  const { board } = useContext(AppContext);

  // after typing letters, it will store letters in the board accordingly, and we can access the letter from the board
  const letter = board[attemptPosition][letterPosition];

  return (
    <>
      <button
        className="bg-gray-200 rounded-md w-12 h-12 text-3xl"
        onClick={() => console.log(attemptPosition, letterPosition)}
      >
        {letter}
      </button>
    </>
  );
};

export default Letter;
