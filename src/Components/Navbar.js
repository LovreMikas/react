import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { LoginContext } from "../Context/LoginContext";

function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { jeUlogiran, toggleLogin } = useContext(LoginContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ color: theme.syntax, background: theme.ui }}>
      <div onClick={() => toggleLogin()}>
        {jeUlogiran ? "Ulogirani ste" : "Niste ulogirani"}
      </div>
      <h1>Meni jako dragi ljudi</h1>
      <ul>
        <li>Lovre</li>
        <li>Mikas</li>
        <li>091 736 7189</li>
      </ul>
    </nav>
  );
}

export default Navbar;
