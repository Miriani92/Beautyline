import React from "react";
import { data } from "./Data";
import { useState } from "react";
import Prodacts from "./Prodacts";

const Allprodact = () => {
  const [products, setProdacts] = useState(data);
  return (
    <article className="products">
      <div className="productsWrapper">
        {products.map((item) => {
          return <Prodacts key={item.id} {...item} />;
        })}
      </div>
    </article>
  );
};

export default Allprodact;
