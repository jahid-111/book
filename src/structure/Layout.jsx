import { Outlet } from "react-router-dom";
import Header from "./page/Header";

const Layout = () => {
  return (
    <div className="mx-32">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
