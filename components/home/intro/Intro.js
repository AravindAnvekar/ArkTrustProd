import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <div className="container mt-5 mb-5" id="about">
      <div className="row">
        <div className="col-sm-8">
          <div className="qodef-image-with-rotate-text-holder">
            <div className="qodef-image-with-rotate-text-inner">
              <p className="qodef-image-with-rotate-text qodef-bg-text--animated qodef--appear">
                <span className="qodef-bg-text-char qodef--show">About us</span>
              </p>
            </div>
          </div>
          {/* <h5 className="textItalic">Play your part</h5> */}
          <h2 className="t2">
            Clean Water. Healthy Kids. Happy People.
          </h2>
          <div className="row">
            <div className="col-sm-6">
              <p>
                Lorem Ipsum. <strong><i>Proin</i></strong> gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibend auctor, nisi elit consequa, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris lorem
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibend auctor, nisi elit consequa, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris lorem
              </p>
              <a href="/" className="link">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 about-lhs">
          {/* <img src="" alt="" className="img-fluid" /> */}
        </div>
      </div>
    </div>
  );
}
