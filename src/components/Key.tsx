import { useContext } from "react";
import { AppContext } from "../context/AppContextLayout";

const Key = ({ keyValue }: { keyValue: string }) => {
  const { onSelectLetter } = useContext(AppContext);

  const selectLetter = () => {
    console.log("selected", keyValue);
    onSelectLetter(keyValue);
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
