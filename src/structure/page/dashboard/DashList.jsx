import axios from "axios";
import { useEffect, useState } from "react";
import BasicArea from "../../../component/SellChart";
import DropDown from "../../../component/DropDown";
import PostNewBook from "../../../component/PostNewBook";
import ReactDOM from "react-dom";
const DashList = ({ value }) => {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  // console.log(modal);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BOOK_SERVER);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePost = () => {
    setModal((p) => !p);
  };

  return (
    <div className="mx-auto w-full">
      <button
        onClick={() => handlePost()}
        className=" border px-4 py-2 rounded-md"
      >
        Add new +
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Total Sell</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {books.map((book) => (
            <tr key={book?.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>$ 9999</td>
              <th>{value ? <BasicArea /> : <DropDown book={book} />}</th>
            </tr>
          ))}
        </tbody>
      </table>
      {modal &&
        ReactDOM.createPortal(
          <PostNewBook
            onClose={() => setModal(false)}
            addProduct={true}
            books={books}
          />,
          document.getElementById("modal")
        )}
    </div>
  );
};

export default DashList;
