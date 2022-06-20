import React from "react";
import Image from "./images/home.jpg";
import Allprodact from "./Allprodact";

const Home = () => {
  return (
    <div>
      <img className="imghome" src={Image} />
      <div className="header">
        <h3>ხშირად გაყიდვადი </h3>
      </div>
      <div className="prodacts">
        <Allprodact />
      </div>
    </div>
  );
};

export default Home;
