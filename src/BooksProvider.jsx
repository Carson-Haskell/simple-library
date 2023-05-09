import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const BooksContext = React.createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage("books", [
    {
      author: "J.R.R. Tolkein",
      title: "The Hobbit",
      pages: 362,
      read: true,
      id: crypto.randomUUID(),
    },
    {
      author: "Frank Herbert",
      title: "Dune",
      pages: 538,
      read: true,
      id: crypto.randomUUID(),
    },
    {
      author: "J.R.R. Tolkein",
      title: "The Lord of the Rings",
      pages: 362,
      read: true,
      id: crypto.randomUUID(),
    },
  ]);

  const addBook = (title, author, pages, read) => {
    const newBooks = [
      ...books,
      {
        title,
        author,
        pages,
        read,
        id: crypto.randomUUID(),
      },
    ];

    setBooks(newBooks);
  };

  const deleteBook = id => {
    const newBooks = [...books].filter(book => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <BooksContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
