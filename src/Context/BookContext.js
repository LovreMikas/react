import React, { Component, createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Jimmy Hendrix", id: 1 },
    { title: "Mark Knopfler", id: 2 },
    { title: "Queen", id: 3 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}
export default BookContextProvider;
