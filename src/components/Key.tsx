import { useContext } from "react";
import { AppContext } from "../context/AppContextLayout";

const Key = ({ keyValue }: { keyValue: string }) => {
  const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

  const selectLetter = () => {
    console.log("selected", keyValue);
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <>
      <button
        onClick={selectLetter}
        className="bg-gray-800 text-white px-4 py-3 text-xl rounded-md"
      >
        {keyValue}
      </button>
    </>
  );
};

export default Key;
