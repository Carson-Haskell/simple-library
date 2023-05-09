import React from "react";
import { BooksContext } from "./BooksProvider";

const BookForm = ({ setShowForm }) => {
  const titleRef = React.useRef();
  const authorRef = React.useRef();
  const pagesRef = React.useRef();
  const readRef = React.useRef();

  const { addBook } = React.useContext(BooksContext);

  const handleSubmit = event => {
    event.preventDefault();

    if (
      titleRef.current.value === "" ||
      authorRef.current.value === "" ||
      pagesRef.currentValue === ""
    )
      return false;

    addBook(
      titleRef.current.value,
      authorRef.current.value,
      pagesRef.current.value,
      readRef.current.checked
    );

    setShowForm(s => !s);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        gap: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="title">
        Title:
        <input type="text" id="title" ref={titleRef} />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" id="author" ref={authorRef} />
      </label>
      <label htmlFor="pages">
        Pages:
        <input type="number" id="pages" ref={pagesRef} />
      </label>
      <label htmlFor="read">
        Read:
        <input type="checkbox" id="read" ref={readRef} />
      </label>
      <button>Add to Library</button>
    </form>
  );
};

export default BookForm;
