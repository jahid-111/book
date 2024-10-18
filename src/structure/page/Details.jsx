import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailDescription from "../../component/DetailDescription";
import ListOfDescription from "../../component/ListOfDescription";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BOOK_SERVER}/${id}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src={
              book.imageUrl ||
              "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            }
            alt={book.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.name}</h2>
          <p>{book.description}</p>
          <h5 className="text-lg font-semibold text-orange-300">
            Price: ${book.price}
          </h5>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className=" my-8 flex flex-col gap-5">
        <DetailDescription />
        <ListOfDescription />
      </div>
    </>
  );
};

export default BookDetails;
