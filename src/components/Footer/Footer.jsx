import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        Made with{" "}
        <span>
          <i className="fa-solid fa-heart"></i>
        </span>{" "}
        and{" "}
        <span>
          <i className="fa-brands fa-react"></i>
        </span>
        <a
          href="https://pratik-shelar.netlify.app"
          title="https://pratik-shelar.netlify.app"
        >
          by Pratik Shelar
        </a>
      </p>
      <p>&copy; 2024 All rights reserved</p>
    </footer>
  );
};
export default Footer;
