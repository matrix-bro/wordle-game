export const defaultBoard = () => {
  const emptyBoard = [];

  for (let i = 0; i < 6; i++) {
    const innerLoop = [];
    for (let j = 0; j < 5; j++) {
      innerLoop.push("");
    }
    emptyBoard.push(innerLoop);
  }

  return emptyBoard;
};

// Will look like this
// [
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
// ];
