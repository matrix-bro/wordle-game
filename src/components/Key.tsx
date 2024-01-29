const Key = ({ keyValue }: { keyValue: string }) => {
  return (
    <>
      <button className="bg-gray-800 text-white px-4 py-3 text-xl rounded-md">
        {keyValue}
      </button>
    </>
  );
};

export default Key;
