import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <div>
      <div className="text-gray-600 body-font overflow-hidden bg-slate-700">
        <div className="container px-5 py-24 mx-auto bg-orange-400">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
