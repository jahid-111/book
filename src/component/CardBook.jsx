import { Link } from "react-router-dom";

const CardBook = ({ book }) => {
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl  my-4">
        <figure>
          <Link to={`/details/${book.id}`}>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </Link>
        </figure>
        <div className="card-body">
          <Link to={`/details/${book.id}`}>
            <h2 className="card-title">{book?.name}!</h2>
          </Link>
          <h5 className="text-xl  font-semibold    text-orange-300">
            Price : $ 111
          </h5>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions flex justify-between">
            <button className="btn w-5/12 btn-primary">Add Cart</button>
            <button className="btn w-6/12 btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBook;
