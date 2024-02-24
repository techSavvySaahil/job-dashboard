import React from "react";
import "./index.css";

const Banner = ({ title, image, summary }) => (
  <div className="banner-wrap">
    <div className="image-wrap">
      <img src={image} alt={title} />
    </div>
    <div className="info-wrap">
      <p className="heading">{title}</p>
      <p>{summary}</p>
    </div>
  </div>
);

export default Banner;
