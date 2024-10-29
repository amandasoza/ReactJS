import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import { Book } from '../interfaces/book.interface';

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

            <h2>Últimos lançamentos</h2>
            <div className="card">
                <div className="thumb">
                    <img 
                        src="imagens/capas/9788575228142.jpg" 
                        alt="Capa do livro Padrões para Kubernetes" 
                    />
                </div>
                <div className="detalhes">
                    <h3>Padrões para Kubernetes</h3>
                    <p>O modo como os ...</p>
                    <a href="#">Leia mais</a>
                </div>
            </div>
            <div className="card">
                <div className="thumb">
                    <img 
                        src="imagens/capas/9788575228074.jpg" 
                        alt="Capa do livro Introdução ao Pentest – 2a Edição" 
                    />
                </div>
                <div className="detalhes">
                    <h3>Introdução ao Pentest – 2a Edição</h3>
                    <p>Introdução ao Pentest...</p>
                    <a href="#">Leia mais</a>
                </div>
            </div>
        </div>
    );
};

export default Principal;
