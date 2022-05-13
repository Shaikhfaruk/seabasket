import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={logo} alt="Sea Basket" />
          </a>
        </div>
        <div className="nav-links">
          <a className="nav-link" href="/">
            Category
          </a>
          <a className="nav-link" href="/">
            FAQs
          </a>
          <a className="nav-link" href="/">
            My Cart
          </a>
          <button className="nav-login-btn">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
