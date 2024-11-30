import React, { useState } from 'react';
import { Book } from '../interfaces/book.interface';

interface BookFormProps {
  onAddBook: (book: Book) => void;
}

const BookForm = ({ onAddBook }: BookFormProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (title && author && year) {
      const newBook: Book = {
        id: Date.now(), 
        title,
        author,
        year: Number(year),
      };
      onAddBook(newBook); 
      setTitle('');
      setAuthor('');
      setYear(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
      </div>

      <div>
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)} 
          required
        />
      </div>

      <div>
        <label htmlFor="year">Ano:</label>
        <input
          type="number"
          id="year"
          value={year === '' ? '' : year} 
          onChange={(e) => setYear(e.target.valueAsNumber || '')} 
          required
        />
      </div>

      <button type="submit">Cadastrar Livro</button>
    </form>
  );
};

export default BookForm;
