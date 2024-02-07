import { useContext } from "react";
import { AppContext } from "../context/AppContextLayout";

const Key = ({ keyValue }: { keyValue: string }) => {
  const { onSelectLetter, onEnter, onDelete, disabledLetters } =
    useContext(AppContext);

  const selectLetter = () => {
    // console.log("selected", keyValue);
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };

  let disabled_status: boolean = false; // default false, if the key is in disabledLetters then disabled equals true
  if (disabledLetters.includes(keyValue)) disabled_status = true;

  return (
    <>
      <button
        onClick={selectLetter}
        className={`bg-gray-800 text-white px-4 py-3 text-xl rounded-md ${
          disabled_status && "disabled:opacity-50 disabled:cursor-not-allowed"
        }`}
        disabled={disabled_status}
      >
        {keyValue}
      </button>
    </>
  );
};

export default Key;
