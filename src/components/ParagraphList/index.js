import React from 'react';
import "./style.scss";
import Paragraph from '../Paragraph';

const ParagraphList = () => {
  return (

    <div>

      <div className="line">
        <img src="Arrow.png" alt="" />
      </div>

      <div className="paragraphList">

        <div className="paragraphListn1">
          <Paragraph className="paragraphText"
            number="01"
            name="Requirements"
            text="Il sito proposto dovrà presentare le seguenti funzionalità:
- Sito di divulgazione di contenuti a tema digitale ed educazione (blog, vlog, recensioni,
etc)
- Vetrina dei nostri corsi disponibili e e-commerce per l'acquisto degli stessi
- Pagina per i camp, che rimangono uno dei prodotti offerti
- Ogni altra pagina che ritenete necessaria (es. Chi siamo o La nostra scuola etc)
- Un contact form"

          />
        </div>

        <div></div>
        <div></div>

        <div className="paragraphListn2">
          <Paragraph className="paragraphResearch"
            number="02"
            name="Briefing"
            image="briefKiddos.png"
          />
        </div>

        <div></div>
        <div></div>

        <div className="paragraphListn3">
          <Paragraph className="paragraphWireframe"
            number="03"
            name="Wireframe"
            image="Sketchpad.png"
          />
        </div>

        <div></div>
        <div></div>

        <div className="paragraphListn4">
          <Paragraph className="paragraphMockup"
            number="04"
            name="Mockup"
            image="kiddosmockup.png"
            link="https://kiddos-website.netlify.app/"
          />

        </div>

      </div>



    </div>
  )
}

export default ParagraphList;