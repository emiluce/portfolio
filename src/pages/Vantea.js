import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/scss/pages/_vantea.scss";
import IntroductionVantea from '../components/IntroductionVantea';
import ParagraphListVantea from "../components/ParagraphListVantea";

const Vantea = () => {
  return (
    <div className="vanteapage">
      <Navbar />

      <div className="vanteapageContent">
        <IntroductionVantea />

        <ParagraphListVantea />
      </div>
      <Footer />
    </div>
  )
}

export default Vantea;
