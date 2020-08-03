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


        <div className="codingCardBox">
          <Coding
            name="Vantea"
            image="url('vant.jpg')"
            link="/vantea"
          />
        </div>

        <div className="codingCardBox">
          <Coding
            name="Kiddos"
            image="url('kid.jpg')"
            link="/kiddos"
          />
        </div>

        <div className="codingCardBox">
          <Coding
            name="FoodHub"
            image="url('foodhub.jpg')"
            link="https://foodhub-project.netlify.app/"
          />

        </div>

        <div className="codingCardBox">
          <Coding
            name="Bruxelles Blog"
            image="url('bruxelles.jpg')"
            link="https://bruxellesblog.netlify.app/"
          />
        </div>



      </div>
    </>
  );
};

export default CodingCard;
