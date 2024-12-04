import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// export function AppFilterNav({ categoryClickHandler }) {
export function AppFilterNav({ categoryClickHandler, deviceType = "desktop" }) {
  // Use deviceType directly if passed
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // Renders carousel on the server-side
      infinite={true}
      autoPlay={deviceType !== "mobile"}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 0.5s ease"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>
  );
}

import path from "path-browserify";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";

export function AppFilterNav({ categoryClickHandler }) {
  const images = import.meta.glob("../assets/images/*.{jpg,png,svg}");

  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 6,
    arrows: true,
  };

  return (
    <div className="app-filter-nav">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* {Object.keys(images).map((image_path) => {
          const image_path_new = image_path.replace(
            "../assets/images/",
            "/air-bnb-full-stuck-project/src/assets/images/"
          );
          <img src={image_path} alt="" />
        })} */}
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </Carousel>

      {/* <div className="app-filter-nav-container">
        <Slider {...settings}>
          {Object.keys(images).map((image_path) => {
            const image_path_new = image_path.replace(
              "../assets/images/",
              "/air-bnb-full-stuck-project/src/assets/images/"
            );
            const imageFilename = path.basename(image_path);

            return (
              <div
                className="filter-nav-item"
                key={imageFilename}
                onClick={() => categoryClickHandler(imageFilename)}
              >
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
      </div> */}
    </div>
  );
}
