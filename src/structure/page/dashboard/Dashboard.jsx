import { Outlet } from "react-router-dom";
import DashboardNav from "../../../component/DashboardNav";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-center gap-5">
        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
