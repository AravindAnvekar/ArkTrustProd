import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-sm-4 about-lhs">
          <img src="https://picsum.photos/300/500" alt="" />
          <div className="qodef-image-with-rotate-text-holder">
            <div className="qodef-image-with-rotate-text-inner">
              <p className="qodef-image-with-rotate-text qodef-bg-text--animated qodef--appear">
                <span className="qodef-bg-text-char qodef--show">A</span>
                <span className="qodef-bg-text-char qodef--show">b</span>
                <span className="qodef-bg-text-char qodef--show">o</span>
                <span className="qodef-bg-text-char qodef--show">u</span>
                <span className="qodef-bg-text-char qodef--show">t</span>
                {/* <span className="qodef-bg-text-char qodef--empty-char"> </span> */}
                <span className="qodef-bg-text-char qodef--show">u</span>
                <span className="qodef-bg-text-char qodef--show">s</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum
            eveniet perspiciatis odit fuga blanditiis culpa corrupti!
            Consequatur mollitia consectetur vero tempora porro molestias vitae,
            reprehenderit, ad, placeat esse aspernatur....
          </h4>
        </div>
      </div>
    </div>
  );
}
