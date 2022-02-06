import React from "react";
import { useState } from "react";
import Image from "./images/home.jpg";
import { data } from "./Data";
import Prodacts from "./Prodacts";

const Home = () => {
  const [products, setProdacts] = useState(data);

  return (
    <div>
      <img className="imghome" src={Image} />
      <div className="header">
        <h3>ხშირად გაყიდვადი </h3>
      </div>

      <article className="products">
        <div className="productsWrapper">
          {products.map((item) => {
            return (
              <Prodacts key={item.id} name={item.name} image={item.image} />
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Home;
