import React from 'react';
import "./style.scss";
import Paragraph from '../Paragraph';

const ParagraphListVantea = () => {
  return (

    <div>

      <div className="lineVantea">
        <img src="Arrow.png" alt="" />
      </div>

      <div className="paragraphList">

        <div className="paragraphListn1">
          <Paragraph className="paragraphText"
            number="01"
            name="Requirements"
            text="Realizzare un’applicazione web responsive per la gestione degli ordini di un bar al fine di permettere all’utente di ordinare beni in modo autonomo."

          />
        </div>

        <div></div>
        <div></div>

        <div className="paragraphListn2">
          <Paragraph className="paragraphResearch"
            number="02"
            name="Briefing"
            image="backlogVantea.jpg"
          />
        </div>

        <div></div>
        <div></div>

        <div className="paragraphListn3Vantea">
          <Paragraph className="paragraphWireframe"
            number="03"
            name="Wireframe"
            image="wireframeVantea.jpg"
          />
        </div>

        <div></div>
        <div></div>

        <div className="paragraphListn4">
          <Paragraph className="paragraphMockup"
            number="04"
            name="Mockup"
            image="mockupVantea.jpg"
          />
        </div>

      </div>



    </div>
  )
}

export default ParagraphListVantea;