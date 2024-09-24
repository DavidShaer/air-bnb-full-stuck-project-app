import path from "path-browserify";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function AppFilterNav() {
  const images = import.meta.glob("../assets/images/*.{jpg,png,svg}");

  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 6,
    arrows: true,
  };

  return (
    <div className="app-filter-nav-container">
      <Slider {...settings}>
        {Object.keys(images).map((image_path) => {
          const image_path_new = image_path.replace(
            "../assets/images/",
            "/air-bnb-full-stuck-project/src/assets/images/"
          );
          const imageFilename = path.basename(image_path);

          return (
            <div className="filter-nav-item" key={imageFilename}>
              <div className="image-wrapper">
                <img
                  src={image_path_new}
                  alt={imageFilename}
                  className="image"
                />
                <div className="image-overlay">
                  {imageFilename.replace(".jpg", "").replace("_", " ")}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
