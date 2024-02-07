import { ReactNode, createContext, useEffect, useState } from "react";
import { defaultBoard } from "../utils/defaultBoard";
import { generateWordSet } from "../utils/generateWords";

type Props = {
  children: ReactNode;
};

type AppContextType = {
  board: string[][];
  onSelectLetter: (keyValue: string) => void;
  onEnter: () => void;
  onDelete: () => void;
  currentAttempt: { attempt: number; letterPos: number };
  correctWord: string;
  disabledLetters: string[];
  setDisabledLetters: React.Dispatch<React.SetStateAction<string[]>>;
};

export const AppContext = createContext({} as AppContextType);

const AppContextLayout = ({ children }: Props) => {
  const [board, setBoard] = useState(defaultBoard);

  // for tracking current attempt, starting attempt will be 0, 0
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });

  const [wordSet, setWordSet] = useState(new Set<string>());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  console.log("Correct Word", correctWord);
  // console.log("Disabled Letters", disabledLetters);

  const onSelectLetter = (keyValue: string) => {
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
    // do nothing or return until the user has typed 5 letters
    // the 'currentAttempt.letterPos' will increase by 1, after typing four letters it will become 5
    if (currentAttempt.letterPos !== 5) return;

    // TODO: Get the current word
    //  - check if the current word is a valid word
    //  - if valid
    //    - check if the current word is correct

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i];
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        ...currentAttempt,
        attempt: currentAttempt.attempt + 1,
        letterPos: 0,
      });
    } else {
      alert("Invalid Word");
      return;
    }

    // console.log("Current WOrd Current WOrd", currentWord);

    if (currentWord.toLowerCase() === correctWord) {
      console.log("You won");
      return;
    }
  };

  // On Delete Key
  const onDelete = () => {
    // console.log("ON DELETE");
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

  // console.log("Default", board);

  return (
    <>
      <AppContext.Provider
        value={{
          board,
          onSelectLetter,
          onEnter,
          onDelete,
          currentAttempt,
          correctWord,
          disabledLetters,
          setDisabledLetters,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppContextLayout;
