import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <div>
      <div className="body-font">
        <div className="container px-5 py-24 mx-auto h-full ">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
