import React from "react";
import "./style.scss";

const Coding = ({
  //*Props: name *//
  name = "",
  image = "",
}) => {
  return (
    <div
      className="sectionCode"
      style={{
        backgroundImage: image,
      }}
    >
      <div className="overlayCode">
        <div className="sectionTabCode">
          <p className="sectionTabTextCode">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Coding;
