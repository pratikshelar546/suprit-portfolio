import React, { useEffect, useRef } from "react";
import { heroImg } from "../../assets";
import "./Banner.css";
import Typed from "typed.js";

const Banner = () => {
  // create the ref for the typewriter animation text
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: [
        "Welcome to my portfolio website",
        "a experienced and seasoned Project Manager",
        "with 5 years of experience",
      ],
      typeSpeed: 60,
      backSpeed: 28,
      loop: true,
    });

    // cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="banner-wrapper" id="home">
        <section className="banner-slogan-container">
          <p className="bn-small-text">Hi there,</p>
          <h1>
            I'm Suprit, <span ref={elementRef}></span>
          </h1>

          <p>
            <i className="fa-solid fa-laptop-code"></i> {"  "}
            I Transform data into actionable insights

          </p>
          <div className="banner-buttons-container">
            <button>
              <a href="#contact">Let's talk ✉</a>
            </button>
            <button id="resume-btn">Resume ↗</button>
          </div>
        </section>

        <section className="banner-image-container">
          <div className="banner-sticker">
            <p>Senior Data Analyst</p>
            <p>CS Undergrad</p>
          </div>
          {/* <img src={mypic} alt="Profile banner" /> */}
          <img src={heroImg} alt="hero" />
          <div className="cover">
            <p>Project Manager</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
