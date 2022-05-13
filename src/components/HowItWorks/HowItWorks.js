import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <>
      <div className="how--it--works">
        <div className="how--it--works--topbar">
          <h1 className="how--it--works--title">How it works</h1>
          <p className="how--it-works--sub--title">
            Sea Basket delivers fresh sourced seafood in a few easy clicks
          </p>
        </div>
        <div className="categories--container">
          <h1 className="categories--heading">CATEGORIES</h1>
          <div className="categories--cards">
            <div className="categories--card">
              <div className="categories--card--img">
                <img src={require("../../assets/fish2.png")} alt="fish" />
              </div>
              <h2 className="categories--card--title">FISH</h2>
            </div>
            <div className="categories--card">
              <div className="categories--card--img">
                <img src={require("../../assets/crustaceans.png")} alt="fish" />
              </div>
              <h2 className="categories--card--title">crustaceans</h2>
            </div>
            <div className="categories--card">
              <div className="categories--card--img">
                <img src={require("../../assets/EXOTIC.png")} alt="fish" />
              </div>
              <h2 className="categories--card--title">EXOTIC</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
