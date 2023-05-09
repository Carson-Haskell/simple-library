import React from "react";
import Book from "./Book";
import { BooksContext } from "./BooksProvider";

const BookList = () => {
  const { books } = React.useContext(BooksContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
