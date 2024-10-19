import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className=" flex flex-col gap-3  w-2/12 bg-gray-800">
      <Link to="/dashboard/sell">Sell</Link>
      <Link to="/dashboard/list">Product</Link>
      <Link to="/dashboard/chart">Chart</Link>
      <Link to="/dashboard/supplier">Supplier</Link>
      <Link to="/dashboard">Other</Link>
    </div>
  );
};

export default DashboardNav;
