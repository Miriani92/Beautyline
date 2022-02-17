import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./Data";

const Singleprodact = () => {
  const [prodact, setProdact] = React.useState(data);

  const { id } = useParams();
  let singleProdact = prodact[id];
  const [mainPicture, setMainPicture] = React.useState(singleProdact.image1);

  const setPicture = (picture) => {
    setMainPicture(picture);
  };
  React.useEffect(() => {
    setPicture(mainPicture);
  }, []);
  return (
    <article className="siglePageWrapper">
      <div className="imageSection">
        <div className="image">
          <img src={require(`${mainPicture}`).default} alt="beautyline" />
        </div>
        <div className="sliderSection">
          <img
            src={require(`${singleProdact.image1}`).default}
            alt="beautyline"
            onClick={() => setMainPicture(singleProdact.image1)}
          />
          <img
            src={require(`${singleProdact.image2}`).default}
            alt="beautyline"
            onClick={() => setMainPicture(singleProdact.image2)}
          />
          <img
            src={require(`${singleProdact.image3}`).default}
            alt="beautyline"
            onClick={() => setMainPicture(singleProdact.image3)}
          />
        </div>
      </div>
      <div className="discriptionSection">
        <h2>{singleProdact.name}</h2>
        <h1 style={{ paddingTop: "20px" }}>{singleProdact.price}₾</h1>
        <h4 style={{ paddingTop: "20px" }}>{singleProdact.discription}</h4>
      </div>
    </article>
  );
};

export default Singleprodact;
