import React from "react";
import BookCard from "./BookCard";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => (
  <div className="row">
    {books.length > 0 ? (
      books.map((book) => (
        <div className="col-md-4" key={book.id}>
          <BookCard book={book} />
        </div>
      ))
    ) : (
      <div className="alert alert-light" role="alert">
        No books found.
      </div>
    )}
  </div>
);

export default BookList;
