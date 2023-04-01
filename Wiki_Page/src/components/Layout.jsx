import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="text-gray-600 body-font overflow-hidden bg-slate-700">
        <div className="container px-5 py-24 mx-auto bg-orange-400">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
