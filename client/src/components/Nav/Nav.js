import React from "react";
import { Link } from "react-router-dom"

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" to="/">
      React Reading List
    </Link>
    <Link className="navbar-brand" to="/topics">
      Topics
    </Link>
    <Link className="navbar-brand" to="/about">
      About
    </Link>
    <Link className="navbar-brand" to="/detail">
      Detail
    </Link>
  </nav>
);

export default Nav;
