import React from "react";
import Navbar from "../components/Navbar";
import Atf from '../components/Atf';
import SectionTabList from '../components/SectionTabList';
import Footer from '../components/Footer';
import "../assets/scss/pages/_home.scss";

const Home = () => {
  return (
    <div className="home">

      <Navbar />

      <Atf />
      <SectionTabList />
      <Footer />
    </div>
  );
};

export default Home;
