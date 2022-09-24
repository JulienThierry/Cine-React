import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <NavLink to="/" className="link">
          <i className="fa-solid fa-house"> </i>
          <li> Accueil</li>
        </NavLink>
        <NavLink to="/coupsdecoeurs" className="link">
          <i className="fa-solid fa-heart"> </i>
          <li> Coups de Coeurs</li>
        </NavLink>
      </ul>
      <h1>Cine React</h1>
    </div>
  );
};

export default Header;
