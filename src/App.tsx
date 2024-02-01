import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import AppContext from "./context/AppContextLayout";

const App = () => {
  return (
    <>
      <AppContext>
        <div className="w-full bg-gray-900">
          <h1 className="text-center text-white text-3xl py-2">Wordle</h1>
        </div>
        <Board />
        <Keyboard />
      </AppContext>
    </>
  );
};

export default App;
