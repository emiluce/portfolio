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
            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"

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
          />
        </div>

      </div>



    </div>
  )
}

export default ParagraphList;