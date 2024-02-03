import WordsList from "./words.txt";

export const generateWordSet = async () => {
  let wordSet = new Set<string>();
  let todaysWord: string = "";

  await fetch(WordsList)
    .then((res) => res.text())
    .then((result) => {
      //   console.log(result);
      let wordList = result.split("\r\n");
      todaysWord = wordList[Math.floor(Math.random() * wordList.length)];
      wordSet = new Set(wordList);
      //   console.log(wordSet);
    });

  return { wordSet, todaysWord };
};
