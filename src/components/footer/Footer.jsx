import React from "react";
import "../Footer/Footer.css";
import footerinsta from "../../assets/footerinsta.png";
import footergithub from "../../assets/footergithub.png";
import footerlinkedin from "../../assets/footerlinkedin.png";

function Footer() {
  return (
    <div className="footer_main">
        <div>
          <img src={footerinsta} className="footer_img1" />
          <img src={footergithub} className="footer_img2"/>
          <img src={footerlinkedin} className="footer_img3"/>
        </div>
     
    </div>
  );
}

export default Footer;
