import { useState, useEffect } from "react";
import axios from "axios";
import CardBook from "../component/CardBook";

const BookList = () => {
  const [books, setBooks] = useState([]); // Fixed variable name from 'book' to 'books'
  // console.log(books);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 ">
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
