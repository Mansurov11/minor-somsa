import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_bar">
          <div className="logo_wrapper">
            <a href="./" className="logo_link">
              <img
                src="public/logo.png"
                alt="Minor Somsa"
                width={30}
                className="logo_icon"
              />

              <h3 className="logo_name">MINOR SOMSA</h3>
            </a>
          </div>

          <div className="socials_wrapper">
            <a href="https://www.instagram.com/minor_somsa/" target="blank" className="socials_link">
              <FaInstagram className="social_icon" />
            </a>
            <a href="https://t.me/minorsomsa_uz" target="blank" className="socials_link">
              <FaTelegram className="social_icon" />
            </a>
            <a href="https://www.youtube.com/@MinorSomsaUz" target="blank" className="socials_link">
              <FaYoutube className="social_icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574557037239" target="blank" className="socials_link">
              <FaFacebook className="social_icon" />
            </a>
            <a href="https://www.tiktok.com/@minorsomsa_uz?_t=ZN-8vKlK8hzaLe&_r=1" target="blank" className="socials_link">
              <FaTiktok className="social_icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
