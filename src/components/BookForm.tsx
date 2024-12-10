import React, { useState, useEffect } from 'react';
import Book from '../types/Book';

interface BookFormProps {
  onSubmit: (book: Omit<Book, 'id'>) => void;
  initialValues?: Omit<Book, 'id'>;
  isUpdate?: boolean;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialValues, isUpdate }) => {
  const [title, setTitle] = useState<string>(initialValues?.title || '');
  const [author, setAuthor] = useState<string>(initialValues?.author || '');
  const [description, setDescription] = useState<string>(initialValues?.description || '');

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title);
      setAuthor(initialValues.author);
      setDescription(initialValues.description);
    }
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit({ title, author, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className='form-label'>Title</label>
        <input type='text' className='form-control' value={title} required onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Author</label>
        <input type='text' className='form-control' value={author} required onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Description</label>
        <textarea className='form-control' value={description} required onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type='submit' className={`btn btn-${isUpdate ? 'warning' : 'primary'}`}>
        <i className={`bi bi-${isUpdate ? 'pencil-square' : 'plus-square'} me-2`}></i>
        {isUpdate ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
