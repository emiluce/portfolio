import React from "react";
import "./style.scss";

const Coding = ({
  //*Props: name *//
  name = "",
  image = "",
  link = "link"
}) => {
  return (
    <div
      className="sectionCode"
      style={{
        backgroundImage: image,
      }}
    >
      <div className="overlayCode">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="sectionTabCode">
            <p className="sectionTabTextCode">{name}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Coding;
