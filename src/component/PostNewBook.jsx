import axios from "axios";
import { useState } from "react";
const PostNewBook = ({ addProduct, book, onClose }) => {
  console.log(book);

  const [formData, setFormData] = useState({
    name: addProduct ? "" : book.name,
    author: addProduct ? "" : book.author,
    genre: addProduct ? "" : book.genre,
    year: addProduct ? "" : book.year,
    summary: addProduct ? "" : book.summary,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prv) => ({
      ...prv,
      [name]: value,
    }));
  };
  const handleSubmitPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/books",
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed  inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-sm  bg-gray-800 p-5 shadow-2xl">
        {addProduct ? (
          <h2 className="text-2xl text-center ">Add Product</h2>
        ) : (
          <h2 className="text-2xl text-center ">Edit Product</h2>
        )}

        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          ✖️
        </button>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmitPost(e)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter the book name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author</span>
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="Genre"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year</span>
              </label>
              <input
                type="date"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>

              <textarea
                className="w-full h-32"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Book Summary"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                {addProduct ? "Add New" : "Edit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostNewBook;
