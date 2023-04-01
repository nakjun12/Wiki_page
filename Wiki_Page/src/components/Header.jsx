import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center">
      <Link to={"/"}>
        <img src="/gk_logo.png" alt="GK Logo" />
      </Link>
    </div>
  );
};

export default Header;
