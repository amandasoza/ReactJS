import React, { useState } from "react";
import BookForm from "./book.form";
import BookList from "./book.list";
import { Book } from "../interfaces/book.interface";
const Principal = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const addBook = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };
  return (
    <div className="App">
      <h1>Cadastro de Livros</h1>
      <BookForm onAddBook={addBook} />
      <BookList books={books} />
    </div>
  );
};
export default Principal;
