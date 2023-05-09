import React from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import BooksProvider from "./BooksProvider";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <BooksProvider>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "45px",
          marginTop: "2px",
          marginBottom: "10px",
          letterSpacing: "5px",
          textTransform: "uppercase",
          borderBottom: "1px solid black",
        }}
      >
        Library
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            width: '150px',
            height: '50px',
            marginTop: "20px",
            borderRadius: "5px",
            border: "1px solid black",
            fontSize: "15px",
          }}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Done' : 'Add Book'}
        </button>
      </div>
      {showForm && <BookForm setShowForm={setShowForm} />}
      <BookList />
    </BooksProvider>
  );
}

export default App;
