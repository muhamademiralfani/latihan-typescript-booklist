import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <Link className='navbar-brand' to='/'></Link>
            <Link className='btn btn-primary' to='/add'>
              Add Book
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/edit/:id' element={<EditBook />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
