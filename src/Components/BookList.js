import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { BookContext } from "../Context/BookContext";
function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul className="da">
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
        {/* <li style = {{ background: theme.bg }}>Gospodar prstenova: Prstenova družina</li>
        <li style = {{ background: theme.bg }}>Harry Potter i kamen mudraca</li>
        <li style = {{ background: theme.bg }}>Digitalni ugljik</li> */}
      </ul>
    </div>
  );
}

export default BookList;
