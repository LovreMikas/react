import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="h">
      <nav className="e">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <h1>LOVRE MIKAS</h1>
        <NavLink activeClassName="active" to="/Dragiljudi.js">
          Dragi ljudi
        </NavLink>
      </nav>
    </div>
  );
}
export default Header;
