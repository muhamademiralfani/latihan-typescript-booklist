import React from "react";

const BookForm: React.FC = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        <i className="bi bi-plus-square me-2"></i> Add Book
      </button>
    </form>
  );
};

export default BookForm;
