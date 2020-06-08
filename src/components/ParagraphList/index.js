import React from 'react';
import "./style.scss";
import Paragraph from '../Paragraph';

const ParagraphList = () => {
  return (
    <div>

      <Paragraph
        number="01"
        name="Brief & Requirements"
        text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"

      />

      <Paragraph
        number="02"
        name="Research"
        image="briefKiddos.png"
      />

      <Paragraph
        number="03"
        name="Wireframe"
        image="briefKiddos.png"
      />

      <Paragraph
        number="04"
        name="Mockup"
        image="briefKiddos.png"
      />
    </div>
  )
}

export default ParagraphList;