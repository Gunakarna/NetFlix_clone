import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Gift Card</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Privacy Relations</li>
        <li>Jobs</li>
        <li>Contac Us</li>
        <li>Corporate Informations</li>
      </ul>
      <p className="Copyright-text">
        &copy; 1997 Netflex. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
