import Board from "./components/Board";

const App = () => {
  return (
    <>
      <div className="w-full bg-gray-900">
        <h1 className="text-center text-white text-3xl py-2">Wordle</h1>
      </div>
      <Board />
    </>
  );
};

export default App;
