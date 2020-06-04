import React from "react";
import "./style.scss";

const SectionTab = ({
  //*Props: name *//
  name = "",
  image = "",
}) => {
  return (
    <div
      className="section"
      style={{
        backgroundImage: image,
      }}
    >
      <div className="overlay">
        <div className="sectionTab">
          <p className="sectionTabText">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTab;
