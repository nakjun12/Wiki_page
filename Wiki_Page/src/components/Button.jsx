const Button = ({ word = "추가", handler }) => {
  console.log(word, handler);
  const buttonHandler = () => {
    if (handler) {
      handler();
      //너무빨리옴
    }
  };

  return (
    <button
      onClick={() => buttonHandler()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {word}
    </button>
  );
};

export default Button;