import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <button onClick={toggleTheme} className="btn">
        Stisni me za magiju{" "}
      </button>
    );
  }
}

export default ThemeToggle;
