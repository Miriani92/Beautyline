import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo_bar">
        <Link to="/">
          <img className="logo" src={logo} alt="beautyline" />
        </Link>
        <button
          className={sidebar ? `btn rotate` : "btn"}
          onClick={() => setSidebar(!sidebar)}
        >
          <FaBars />
        </button>
      </div>
      <div className="sidebarwrapper">
        <ul className={!sidebar ? `sidebar` : "sidebar show"}>
          <li>
            <Link to="/" className="link">
              მთავარი
            </Link>
          </li>
          <li>
            <Link to="/Aboutus" className="link">
              ჩვენს შესახებ
            </Link>
          </li>
          <li>
            <Link to="/Production" className="link">
              პროდუქცია
            </Link>
          </li>
          <li>
            <Link to="/Discounts" className="link">
              აქციები
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="link">
              კონტაქტი
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
