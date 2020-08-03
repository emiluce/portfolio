import React from "react";
import "./style.scss";
import SectionTab from "../SectionTab";

const SectionTabList = () => {
  return (
    <>
      <div id="imieilavori" className="imieilavori">
        <h2></h2>
      </div>

      <div className="sectionTabList">
        <a className="sectionTabLink" href="/coding">
          <SectionTab
            name="Coding"
            image="url('code.jpg')"
          />
        </a>

        <a className="sectionTabLink" href="/Workinprogress">
          <SectionTab
            name="Tesi di laurea"
            image="url('tesi.jpg')"
          />
        </a>

        <a className="sectionTabLink" href="/Workinprogress">
          <SectionTab
            name="Grafica"
            image="url('glitch.jpg')"
          />
        </a>
        <a className="sectionTabLink" href="/Workinprogress">
          <SectionTab
            name="Student career"
            image="url('student.jpg')"
          />
        </a>

        <a className="sectionTabLink" href="/Workinprogress">
          <SectionTab
            name="Illustrazione & Animazione"
            image="url('illustrazione.png')"
          />
        </a>


        <a className="sectionTabLink" href="/Workinprogress">
          <SectionTab
            name="UX & UI"
            image="url('ux.jpg')"
          />
        </a>

      </div>
    </>
  );
};

export default SectionTabList;
