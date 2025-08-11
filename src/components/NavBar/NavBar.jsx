import React from "react";
import './NavBar.css'
import logo from "../../assets/logo.png";
import Search_icon from "../../assets/search_icon.svg";
import Bell_icon from "../../assets/bell_icon.svg";
import Profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>My Languages</li>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={Search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={Bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
                <img src={Profile_img} alt=""  className="profile"/>
                 <img src={caret_icon} alt="" />
                 <div className="dropdown">
                  <p>Sign out of Netflix</p>
                 </div>
                
        </div>
      </div>
    </div>
  );
}

export default NavBar;
