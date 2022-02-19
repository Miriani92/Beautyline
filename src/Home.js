import React from "react";
import Image from "./images/home.jpg";
import Allprodact from "./Allprodact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <img className="imghome" src={Image} />
      <div className="header">
        <h3>ხშირად გაყიდვადი </h3>
      </div>
      <div>
        <Allprodact />
      </div>
    </div>
  );
};

export default Home;
