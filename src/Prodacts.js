import React from "react";
import { Link } from "react-router-dom";

const Prodacts = ({ id, image1, name }) => {
  return (
    <React.Fragment>
      <Link to={`/Prodacts/${id}`}>
        <div className="productcard">
          <h2 className="productheader">{name}</h2>
          <div className="imagecontainer">
            <img className="productimage" src={require(`${image1}`).default} />
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Prodacts;
