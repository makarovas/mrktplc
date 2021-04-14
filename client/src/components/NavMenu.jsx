import React from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <div className="nav bg-light d-flex justify-content">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/registration" className="nav-link">
        Register
      </Link>
    </div>
  );
};
