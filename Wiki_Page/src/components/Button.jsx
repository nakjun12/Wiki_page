import { useNavigate } from "react-router";

const Button = ({ word = "추가" }) => {
  const navigate = useNavigate();

  const address = word === "추가" ? "Editor" : "/";
  return (
    <button
      onClick={() => navigate(address)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {word}
    </button>
  );
};

export default Button;
