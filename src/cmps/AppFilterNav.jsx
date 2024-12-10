import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/setup/_variables.scss";
import { Link, NavLink } from "react-router-dom";

export function AppFilterNav({ categoryClickHandler }) {
  const CustomButtonGroupAsArrows = ({ next, previous }) => (
    <div>
      <CustomLeftArrow onClick={previous} />
      <CustomRightArrow onClick={next} />
    </div>
  );

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: "-4%",
        top: "36%",
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        color: "black",
        border: "2px solid #aaa",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        cursor: "pointer",
        zIndex: 1,
      }}
    >
      {"<"}
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "-4%",
        top: "36%",
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        color: "black",
        border: "2px solid #aaa",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        cursor: "pointer",
        zIndex: 1,
        marginLeft: "10px",
      }}
    >
      {">"}
    </button>
  );

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1601 },
      // items: 5,
      items: 9,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      // items: 4,
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      // items: 2,
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      // items: 1,
      items: 1,
    },
  };

  const images = import.meta.glob("../assets/images/*.{jpg,png,svg}");
  return (
    <div className="app-filter-nav">
      <div className="filter-container">
        <Carousel
          responsive={responsive}
          infinite
          // autoPlay
          autoPlaySpeed={3000}
          customButtonGroup={<CustomButtonGroupAsArrows />}
          renderButtonGroupOutside
          arrows={false}
          additionalTransfrom={0}
          centerMode={false}
          containerClass="carousel-container"
        >
          {Object.keys(images).map((image_path) => {
            const image_path_new = image_path.replace(
              "../assets/images/",
              "/air-bnb-full-stuck-project/src/assets/images/"
            );
            const imageFilename = image_path.split("/").pop(); // Extract file name

            return (
              <a
                className="filter-nav-item"
                key={imageFilename}
                onClick={() => categoryClickHandler(imageFilename)}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div>
                  <img src={image_path_new} alt={imageFilename} />
                  <div>
                    {imageFilename.replace(".jpg", "").replace("_", " ")}
                  </div>
                </div>
              </a>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
