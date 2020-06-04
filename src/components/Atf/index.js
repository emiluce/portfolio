import React from "react";
import "./style.scss";
import Illustration from "../Illustration";


const Atf = () => {
  const scrollBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className="atf">



      <div className="introduction">
        <h1>Ciao, sono Emanuela. <br /> Benvenuti nel mio sito! </h1>

        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default" onClick={scrollBottom}>Dai un'occhiata ai miei lavori</button>
        </div>
      </div>



      <Illustration />
    </div>





  );
};

export default Atf;