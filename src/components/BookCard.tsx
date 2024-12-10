import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{book.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
      <p className="card-text">{book.description}</p>
      <button className="btn btn-danger">Delete</button>
    </div>
  </div>
);

export default BookCard;
