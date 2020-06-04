import React from "react";
import "./style.scss";
import SectionTab from "../SectionTab";

const SectionTabList = () => {
  return (
    <>
      <div>
        <h2>I miei lavori</h2>
      </div>
      <div className="sectionTabList">
        <SectionTab
          name="Coding"
          image="url('code.jpg')"
        />
        <SectionTab
          name="Tesi di laurea"
          image="url('tesi.jpg')"
        />
        <SectionTab
          name="Grafica"
          image="url('glitch.jpg')"
        />
        <SectionTab
          name="Student career"
          image="url('student.jpg')"
        />
        <SectionTab
          name="Illustrazione & animazione"
          image="url('illustrazione.png')"
        />


      </div>
    </>
  );
};

export default SectionTabList;
