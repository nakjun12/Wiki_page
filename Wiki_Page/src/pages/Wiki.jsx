import { useNavigate } from "react-router";

const Wiki = ({ data }) => {
  const navigate = useNavigate();
  if (!data) {
    navigate("/");
    return <></>;
  }
  return <div>위키</div>;
};

export default Wiki;
