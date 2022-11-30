import React from "react";
import Deals from "../components/Home/Deals";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import Necessities from "../components/Home/Necessities";
import SearchSection from "../components/Home/SearchSection";
import Subscribe from "../components/Home/Subscribe";

const Home = () => {
  return (
    <>
      <div className="bg-bg-c">
        <Navbar />
      </div>
      <br />
      <div>
        <Necessities />
        <SearchSection />
        {/* <Deals /> */}
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
