import React from "react";
import "./Hero.scss";
import { FaHeart } from "react-icons/fa";

export default function Hero() {
  return (
    <div id="hero">
      <div className="inner">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-sm-6">
              <h1>
                We can make a difference. <br />
                Let's start now
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn btn-light">
                <FaHeart className="heart" /> Donate Now
              </button>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
