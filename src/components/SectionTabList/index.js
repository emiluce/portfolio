import React from "react";
import "./style.scss";
import SectionTab from "../SectionTab";

const SectionTabList = () => {
  return (
    <>
      <div id="imieilavori">
        <h2>I miei lavori</h2>
      </div>
      <div className="sectionTabList">
        <a className="sectionTabLink" href="/coding">
          <SectionTab
            name="Coding"
            image="url('code.jpg')"
          />
        </a>

        <a className="sectionTabLink" href="/tesi">
          <SectionTab
            name="Tesi di laurea"
            image="url('tesi.jpg')"
          />
        </a>

        <a className="sectionTabLink" href="/grafica">
          <SectionTab
            name="Grafica"
            image="url('glitch.jpg')"
          />
        </a>
        <a className="sectionTabLink" href="/student">
          <SectionTab
            name="Student career"
            image="url('student.jpg')"
          />
        </a>

        <a className="sectionTabLink" href="/illustrazione">
          <SectionTab
            name="Illustrazione & Animazione"
            image="url('illustrazione.png')"
          />
        </a>


      </div>
    </>
  );
};

export default SectionTabList;
