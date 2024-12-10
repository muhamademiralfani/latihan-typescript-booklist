import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import apiClient from '../utils/api';
import Book from '../types/Book';

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Omit<Book, 'id'> | null>(null);

  useEffect(() => {
    apiClient
      .get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = (updatedBook: Omit<Book, 'id'>) => {
    apiClient
      .put(`/books/${id}`, updatedBook)
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container mt-4'>
      <h1>Edit Book</h1>
      <BookForm onSubmit={handleUpdate} initialValues={book} isUpdate />
    </div>
  );
};

export default EditBook;
