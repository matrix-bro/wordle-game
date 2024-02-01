import Letter from "./Letter";

const Board = () => {
  // creating a board of 6 rows and 5 cols
  const createBoard = () => {
    let allLetters: React.ReactElement[] = [];

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        // attempPosition for tracking row position
        // letterPosition for tracking column position
        allLetters.push(<Letter attemptPosition={i} letterPosition={j} />);
      }
    }

    return allLetters;
  };

  // displaying board
  // 5 letters per row
  const displayBoard = () => {
    const allLetters = createBoard();

    const result = [];

    for (let i = 0; i < allLetters.length; i += 5) {
      result.push(
        <div key={i} className="flex gap-2">
          {allLetters[i]}
          {allLetters[i + 1]}
          {allLetters[i + 2]}
          {allLetters[i + 3]}
          {allLetters[i + 4]}
        </div>
      );
    }

    return result;
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 space-y-2">
        {displayBoard()}
      </div>
    </>
  );
};

export default Board;
