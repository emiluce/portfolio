import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodingCard from '../components/CodingCard';
import _coding from '../assets/scss/pages/_coding.scss';

const Coding = () => {
  return (
    <div className="code">
      <Navbar />
      <CodingCard />
      <Footer />
    </div>
  )
}

export default Coding;
