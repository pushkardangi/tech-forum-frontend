import React from "react";
import {useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const signOut = () => {
    navigate("/")
  };

  return (
    <nav className="navbar">
      <h2>Tech Forum</h2>
      <div className="navbarRight">
        <button onClick={signOut}>Sign out</button>
      </div>
    </nav>
  );
};

export default Nav;
