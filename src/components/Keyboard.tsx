import Key from "./Key";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // const { onSelectLetter } = useContext(AppContextType);

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex gap-3">
          {keys1.map((key, index) => (
            <Key keyValue={key} key={index} />
          ))}
        </div>
        <div className="flex gap-3">
          {keys2.map((key, index) => (
            <Key keyValue={key} key={index} />
          ))}
        </div>
        <div className="flex gap-3">
          <Key keyValue={"ENTER"} />
          {keys3.map((key, index) => (
            <Key keyValue={key} key={index} />
          ))}
          <Key keyValue={"DELETE"} />
        </div>
      </div>
    </>
  );
};

export default Keyboard;
