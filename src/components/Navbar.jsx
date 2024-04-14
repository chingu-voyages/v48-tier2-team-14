import React, { useState } from "react";
import list from "../../assets/align-justify.svg";

export default function Navbar() {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="row mt-3 mb-2">
      <div className="col-md-8">
        <h3 className="nav-title">Dino Studio</h3>
      </div>

      <div
        className="col-md-4 d-inline-flex justify-content-between mt-1 fw-medium cursor-pointer"
        id="navbar"
      >
        <img src={list} alt="list" id="hamburger-sign" onClick={handleClick} />
        <div className="links">
          <a
            href="#search-bar"
            className="text-decoration-none text-black"
            id={active ? "search" : "hide"}
          >
            Dinosaur Search
          </a>
          <a
            href="#dinoNews"
            className="text-decoration-none text-black"
            id={active ? "news" : "hide"}
          >
            News
          </a>
          <a
            href="#footer"
            className="text-decoration-none text-black"
            id={active ? "contact" : "hide"}
          >
            Contact Us
          </a>
        </div>
      </div>
      <div id="hamburger-sign"></div>
    </div>
  );
}
