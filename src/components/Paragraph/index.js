import React from 'react';
import "./style.scss";

const Paragraph = ({
  number = "",
  name = "",
  text = "",
  image = ""
}) => {
  return (
    <div className="paragraph">

      <div className="numberParagraph">
        <span className="number">{number}</span>
        <p className="paragraphText">{name}</p>
      </div>


      <img className="paragraphImage" src={image} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default Paragraph;
