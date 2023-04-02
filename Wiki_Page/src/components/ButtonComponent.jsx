const ButtonComponent = ({ word = "추가", handler }) => {
  // 상황에 맞춰 컴포넌트화하여 사용할 수 있게 핸들러로 컨드롤 함
  const buttonHandler = () => {
    if (handler) {
      handler();
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
