import React from "react";
import { Link } from "react-router-dom";

const Prodacts = ({ id, image1, name }) => {
  return (
    <React.Fragment>
      <Link to={`/Prodacts/${id}`}>
        <div className="productcard">
          <h2>{name}</h2>
          <img className="productimage" src={require(`${image1}`).default} />
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Prodacts;
