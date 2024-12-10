import React from "react";
import BookForm from "../components/BookForm";
const AddBook: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Add a New Book</h1>
      <BookForm />
    </div>
  );
};

export default AddBook;
