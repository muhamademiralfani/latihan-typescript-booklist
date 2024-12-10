import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import Book from '../types/Book';
import apiClient from '../utils/api';
import confirmDelete from '../components/ui/ConfirmDelete';

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  

  const getData = () => {
    apiClient
      .get('/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id: number) => {
    apiClient
      .delete(`/books/${id}`)
      .then(() => {
        confirmDelete(handleDelete);
        getData();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='container mt-4'>
      <h1>Bookshelf</h1>
      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
