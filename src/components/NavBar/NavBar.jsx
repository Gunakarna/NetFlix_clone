import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import Search_icon from "../../assets/search_icon.svg";
import Bell_icon from "../../assets/bell_icon.svg";
import Profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

function NavBar() {
  const navref = useRef();
  const dropdownRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  // navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        navref.current.classList.add("nav_black");
      } else {
        navref.current.classList.remove("nav_black");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  return (
    <div ref={navref} className="navbar">
      <div className="navbar_left">
        <img src={logo} alt="logo" />
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
        <img src={Search_icon} alt="search" className="icons" />
        <p>Children</p>
        <img src={Bell_icon} alt="bell" className="icons" />
        <div
          className="navbar-profile"
          ref={dropdownRef}
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <img src={Profile_img} alt="profile" className="profile" />
          <img src={caret_icon} alt="caret" />
          {showDropdown && (
            <div className="dropdown">
              <p
                onClick={() => {
                  logout();
                  setShowDropdown(false); // close after logout
                }}
              >
                Sign out of Netflix
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
