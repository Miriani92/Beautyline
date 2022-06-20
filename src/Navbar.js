import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { FaBars } from "react-icons/fa";
import Svg from "./components/Svg";

const Navbar = () => {
  const [classname, setclassname] = useState("hide");

  const showLinks = () => {
    if (classname === "hide") {
      setclassname("show_navlinks");
    }
    if (classname === "show_navlinks") {
      setclassname("hide");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo_bar">
        <Link to="/">
          <img className="logo" src={logo} alt="beautyline" />
        </Link>
        <button className="bars_btn" onClick={showLinks}>
          <FaBars />
        </button>
      </div>
      <ul className={classname}>
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
      <div className="cartsvg">
        {" "}
        <Svg />
      </div>
    </nav>
  );
};

export default Navbar;
