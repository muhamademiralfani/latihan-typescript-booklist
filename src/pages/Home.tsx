import React, { useState } from "react";
import BookList from "../components/BookList";

const Home: React.FC = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "Book 1",
            author: "Author 1",
            description: "Description 1",
        },
        {
            id: 2,
            title: "Book 2",
            author: "Author 2",
            description: "Description 2",
        },
    ]);

  return (
    <div className="container mt-4">
      <h1>Bookshelf</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;
