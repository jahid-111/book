import { useState } from "react";
import ReactDOM from "react-dom";
import PostNewBook from "./PostNewBook";

const DropDown = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButton = (name) => {
    // console.log(name);
    if (name === "edit") {
      setIsModalOpen(true);
    } else if (name === "delete") {
      console.log("Delete Dialogue");
    }
  };

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          Action
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content border menu rounded-box z-[1] w-52 px-2 bg-gray-700 shadow"
        >
          <li className=" border-b ">
            <button onClick={() => handleButton("edit")}>Edit</button>
          </li>
          <li>
            <button onClick={() => handleButton("delete")}>Delete</button>
          </li>
        </ul>
      </div>

      {isModalOpen &&
        ReactDOM.createPortal(
          <PostNewBook book={book} onClose={() => setIsModalOpen(false)} />,
          document.getElementById("modal")
        )}
    </div>
  );
};

export default DropDown;
