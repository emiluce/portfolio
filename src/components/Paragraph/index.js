import React from 'react';
import "./style.scss";

const Paragraph = ({
  number = "",
  name = "",
  text = "",
  image = "",
  link = ""

}) => {
  return (
    <div className="paragraph">

      <div className="numberParagraph">
        <span className="number">{number}</span>
        <p className="paragraphText">{name}</p>
      </div>

      <a className="linkPage" href={link} target="_blank" rel="noopener noreferrer">
        <img className="paragraphImage" src={image} alt="" />
      </a>
      <p>{text}</p>

    </div>
  )
}

export default Paragraph;
