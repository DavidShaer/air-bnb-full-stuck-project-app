import path from "path-browserify";
import React from "react";
import Slider from "react-slick";

export function AppFilterNav() {
  const images = import.meta.glob("../assets/images/*.{jpg,png,svg}");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    // <div className="slider-container">
    //   <Slider {...settings}>
    <div className="filter-row-container">
      {/* <Slider {...settings}> */}
      {Object.keys(images).map((image_path) => {
        const image_path_new = image_path.replace(
          "../assets/images/",
          "/air-bnb-full-stuck-project/src/assets/images/"
        );
        const imageFilename = path.basename(image_path);

        return (
          <div className="filter-nav-item" key={imageFilename}>
            <div className="image-wrapper">
              <img src={image_path_new} alt={imageFilename} className="image" />
              <div className="image-overlay">
                <p>{imageFilename.replace(".jpg", "").replace("_", " ")}</p>
              </div>
            </div>
          </div>
        );
      })}
      {/* </Slider> */}
    </div>
  );
}
