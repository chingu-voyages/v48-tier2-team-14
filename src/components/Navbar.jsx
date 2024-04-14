import React from "react";
import list from "../../assets/align-justify.svg";

export default function Navbar() {
  return (
    <div className="row mt-3 mb-2">
      <div className="col-md-8">
        <h3>Dino Studio</h3>
      </div>


      <div
        className="col-md-4 d-inline-flex justify-content-between mt-1 fw-medium cursor-pointer"
        id="navbar"
      >
        <img src={list} alt="list" id="hamburger-sign" />
        <a
          href="#search"
          className="text-decoration-none text-black"
          id="search"
        >
          Dinosaur Search
        </a>
        <a href="#dinoNews" className="text-decoration-none text-black" id="news">
          News
        </a>
        <a href="#footer" className="text-decoration-none text-black" id="contact">
          Contact Us
        </a>

      </div>
      <div id="hamburger-sign"></div>
    </div>
  );
}
