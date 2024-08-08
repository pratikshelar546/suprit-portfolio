import React from "react";
import "./Services.css";
import { illusFrontend, illusBackend, illusMobile, illuspm } from "../../assets";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref: myTitleRef, inView: titleVisible } = useInView();
  const { ref: myCardRef, inView: cardVisible } = useInView();

  return (
    <div className="skills-wrapper">
      <header className="title-container" id="skills">
        <h2
          ref={myTitleRef}
          className={
            titleVisible ? "component-headings show" : "component-headings"
          }
        >
          <span className="heading-highlight">Services</span> I{" "}
          <span className="heading-highlight">provide</span>.
        </h2>
        <div className="underline"></div>
      </header>
      <div ref={myCardRef} className="cards-container">
        <div className={cardVisible ? "Card one show" : "Card one"}>
          <div className="Card-inner">
            <div className="skills-images">
              <img src={illusFrontend} alt="palette" />
            </div>
            <h3>Data cleaning</h3>
            <p>Streamlining Data for Accuracy and Insights</p>
          </div>
        </div>

        <div className={cardVisible ? "Card two show" : "Card two"}>
          <div className="Card-inner">
            <div className="skills-images">
              <img src={illusBackend} alt="frontend" />
            </div>
            <h3>Data processing
            </h3>
            <p>Transforming Raw Data into Usable Formats</p>
          </div>
        </div>

        <div className={cardVisible ? "Card three show" : "Card three"}>
          <div className="Card-inner">
            <div className="skills-images">
              <img src={illusMobile} alt="database" />
            </div>
            <h3>Data visualisation</h3>
            <p>Turning Data into Clear Visual Stories</p>
          </div>
        </div>
        <div className={cardVisible ? "Card four show" : "Card three"}>
          <div className="Card-inner">
            <div className="skills-images">
              <img src={illuspm} alt="database" />
            </div>
            <h3>Project management</h3>
            <p>Coordinating Projects for Efficient Execution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
