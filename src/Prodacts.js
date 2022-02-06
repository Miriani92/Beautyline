import React from "react";

const Prodacts = ({ id, image, name }) => {
  return (
    <div className="productcard">
      <h2>{name}</h2>
      <img className="productimage" src={require(`${image}`).default} />
    </div>
  );
};

export default Prodacts;
