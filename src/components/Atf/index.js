import React from "react";
import "./style.scss";


const Atf = () => {

  return (
    <div className="atf">





      <div className="introduction">
        <h1>Ciao, sono Emanuela. <br /> Benvenuti nel mio sito! </h1>

        <div className="btn-group" role="group" aria-label="...">
          <a href="#imieilavori">
            <button type="button" className="btn btn-default">Dai un'occhiata ai miei lavori</button>
          </a>
        </div>
      </div>


      <div className="secondAtf">
        <img className="illustrationAtf" src="Human.png" alt="" />
      </div>

    </div>



  );
};

export default Atf;