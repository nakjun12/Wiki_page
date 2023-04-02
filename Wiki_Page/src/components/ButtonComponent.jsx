const ButtonComponent = ({ word = "추가", handler }) => {
  const buttonHandler = () => {
    if (handler) {
      handler();
      //너무빨리옴
    }
  };

  return (
    <button
      onClick={() => buttonHandler()}
      className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {word}
    </button>
  );
};

export default ButtonComponent;
