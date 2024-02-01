import { ReactNode, createContext, useState } from "react";
import { defaultBoard } from "../utils/defaultBoard";

type Props = {
  children: ReactNode;
};

type AppContextType = {
  board: string[][];
  onSelectLetter: (keyValue: string) => void;
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
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
    setBoard(newBoard);

    // After setting value in the board, increase the currentAttempt
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    });
  };
  console.log("Default", board);

  return (
    <>
      <AppContext.Provider value={{ board, onSelectLetter }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppContextLayout;
