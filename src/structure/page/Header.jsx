import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" my-10  border-b-2 pb-2">
      <ul className=" flex justify-center   gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="dashboard/list">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
