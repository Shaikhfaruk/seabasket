import React from "react";
import fish from "../../assets/fish.png";
import "./Home.css";
import lefttopArrow from "../../assets/lefttoparrow.png";
import leftCenterArrow from "../../assets/leftCenterArrow.png";
import leftBottomAroor from "../../assets/leftBottomAroor.png";
import rightTopArrow from "../../assets/rightTopArrow.png";
import centerCenterArrow from "../../assets/centerCenterArrow.png";
import rightBottomAroor from "../../assets/rightBottomAroor.png";
import Navbar from "../navbar/Navbar";
import HowItWorks from "../HowItWorks/HowItWorks";
import Product from "../Product/Product";
import Faqs from "../Faqs/Faqs";
import HaveARead from "../HaveARead/HaveARead";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero--left">
          <div className="hero--left--top">
            <h1 className="hero--left--top--text hero--text">healthy</h1>
            <div className="left--top--arrow">
              <img src={lefttopArrow} alt="" />
            </div>
          </div>
          <div className="hero--left--center">
            <h1 className="hero--left--center--text hero--text">yummy</h1>
            <div className="left--center--arrow">
              <img src={leftCenterArrow} alt="" />
            </div>
          </div>
          <div className="hero--left--bottom">
            <h1 className="hero--left--bottom--text hero--text">snacks</h1>
            <div className="left--bottom--arrow">
              <img src={leftBottomAroor} alt="" />
            </div>
          </div>
        </div>
        <div className="hero--center">
          <h1 className="center--top">What the</h1>
          <div className="center--center">
            <img src={fish} alt="homeFish" />
          </div>
          <h1 className="center--bottom">Fish</h1>
        </div>
        <div className="hero--right">
          <div className="hero--right--top">
            <h1 className="hero--right--top--text hero--text">tasty</h1>
            <div className="right--top--arrow">
              <img src={rightTopArrow} alt="" />
            </div>
          </div>
          <div className="hero--right--center">
            <h1 className="hero--right--center--text hero--text">lunch</h1>
            <div className="right--center--arrow">
              <img src={centerCenterArrow} alt="" />
            </div>
          </div>
          <div className="hero--right--bottom">
            <h1 className="hero--right--bottom--text hero--text">dinner</h1>
            <div className="right--bottom--arrow">
              <img src={rightBottomAroor} alt="" />
            </div>
          </div>
        </div>
      </div>
      <HowItWorks />
      <Product />
      <Faqs />
      <HaveARead />
    </>
  );
};

export default Home;
