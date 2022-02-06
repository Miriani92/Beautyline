import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

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
        {" "}
        <Link>
          <img className="logo" src={logo} alt="beautyline" />
        </Link>
        <button className="bars_btn" onClick={showLinks}>
          <FontAwesomeIcon icon={faBars} size="lg" />
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
          <Link to="/Prodacts" className="link">
            პროდქცია
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
    </nav>
  );
};

export default Navbar;
