import React from 'react'

export default function Navbar() {
  return (
    <div className="row mt-3 mb-2">
        <div className="col-md-8">
            <h3>Dino Studio</h3>
        </div>
        <div className="col-md-4 d-inline-flex justify-content-around mt-1 fw-bold cursor-pointer">
            <a href="#">Search dinosaur</a>
            <a href="#">News</a>
            <a href="#">Connect Us</a>
        </div>
	</div>
  );
}
