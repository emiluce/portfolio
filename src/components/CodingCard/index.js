import React from "react";
import "./style.scss";
import Coding from "../Coding";


const CodingCard = () => {
  return (
    <>
      <div>
        <h2 className="websites">Websites</h2>
      </div>
      <div className="codingCard">
        <a href="/vantea" target="_blank">
          <Coding
            name="Vantea"
            image="url('vant.jpg')"
          />
        </a>

        <a href="https://kiddos-website.netlify.app/" target="_blank" >
          <Coding
            name="Kiddos"
            image="url('kid.jpg')"
          />
        </a>

        <a href="https://foodhub-project.netlify.app/" target="_blank">
          <Coding
            name="FoodHub"
            image="url('foodhub.jpg')"
          />
        </a>
        <a href="https://bruxellesblog.netlify.app/" target="_blank">
          <Coding
            name="Bruxelles Blog"
            image="url('bruxelles.jpg')"
          />
        </a>




      </div>
    </>
  );
};

export default CodingCard;
