import { ReactNode, createContext, useState } from "react";
import { defaultBoard } from "../utils/defaultBoard";

type Props = {
  children: ReactNode;
};

type AppContextType = {
  board: string[][];
  onSelectLetter: (keyValue: string) => void;
  onEnter: () => void;
  onDelete: () => void;
  // currentAttempt: { attempt: number; letterPos: number };
};

export const AppContext = createContext({} as AppContextType);

const AppContextLayout = ({ children }: Props) => {
  const [board, setBoard] = useState(defaultBoard);

  // for tracking current attempt, starting attempt will be 0, 0
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });

  const onSelectLetter = (keyValue: string) => {
    console.log("IN ", keyValue);
    // return after typing 5 letters
    if (currentAttempt.letterPos > 4) return;

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
    setBoard(newBoard);

    // After setting value in the board, increase the currentAttempt
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    });
  };

  // On Enter Key
  const onEnter = () => {
    console.log("Enter");
    // do nothing or return until the user has typed 5 letters
    // after typing four letters, the 'currentAttempt.letterPos' will increase by 1, so it will be 5
    if (currentAttempt.letterPos !== 5) return;

    // TODO: Get the current word
    //  - check if the current word is a valid word
    //  - if valid
    //    - check if the current word is correct

    setCurrentAttempt({
      ...currentAttempt,
      attempt: currentAttempt.attempt + 1,
      letterPos: 0,
    });
  };

  // On Delete Key
  const onDelete = () => {
    console.log("ON DELETE");
    // return if there is no letters
    if (currentAttempt.letterPos === 0) return;

    // remove letter from the board
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(newBoard);

    // decrease currentAttempt
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };

  console.log("Default", board);

  return (
    <>
      <AppContext.Provider value={{ board, onSelectLetter, onEnter, onDelete }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppContextLayout;
