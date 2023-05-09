import React from "react";
import { BooksContext } from "./BooksProvider";

const Book = ({ book }) => {
  const { deleteBook } = React.useContext(BooksContext);

  const { title, author, pages, read, id } = book;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        border: "1px solid black",
        backgroundColor: "lightgray",
        width: "30%",
        height: "250px",
        margin: "20px",
      }}
    >
      <h3 style={{ fontSize: "30px", marginBottom: "0" }}>Title: {title}</h3>
      <p>Author: {author}</p>
      <p>Pages: {pages}</p>
      <p>Read: {read ? "Yes" : "No"}</p>
      <button
        style={{
          width: "70px",
          height: "20px",
          border: "1px solid black",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
        onClick={() => deleteBook(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Book;
