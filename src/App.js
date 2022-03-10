import React from "react";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import "./styles.css";
import ThemeContextProvider from "./Context/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import LoginContextProvider from "./Context/LoginContext";
import BookContextProvider from "./Context/BookContext";
import Footer from "./Footer";
import Header from "./Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route path="/Dragiljudi.js" />
        </Switch>
      </Router>
      <LoginContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
      </LoginContextProvider>
      <Footer />
    </div>
  );
}
