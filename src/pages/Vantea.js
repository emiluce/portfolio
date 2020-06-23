import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/scss/pages/_vantea.scss";
import Introduction from '../components/Introduction';
import ParagraphList from "../components/ParagraphList";

const Vantea = () => {
  return (
    <div className="vanteapage">
      <Navbar />

      <div className="vanteapageContent">
        <Introduction />

        <ParagraphList />
      </div>
      <Footer />
    </div>
  )
}

export default Vantea;
