import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/setup/_variables.scss";

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
        zIndex: 10,
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
        zIndex: 900,
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
      items: 5,
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

  // const items = [
  //   { id: 1, name: "Item 1", color: "#FFD700" },
  //   { id: 2, name: "Item 2", color: "#FF5733" },
  //   { id: 3, name: "Item 3", color: "#33FF57" },
  //   { id: 4, name: "Item 4", color: "#337DFF" },
  //   { id: 5, name: "Item 5", color: "#FF33A6" },
  // ];
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
        >
          {Object.keys(images).map((image_path) => {
            const image_path_new = image_path.replace(
              "../assets/images/",
              "/air-bnb-full-stuck-project/src/assets/images/"
            );
            const imageFilename = image_path.split("/").pop(); // Extract file name

            return (
              <div
                className="filter-nav-item"
                key={imageFilename}
                onClick={() => categoryClickHandler(imageFilename)}
                style={{
                  // padding: "10px",
                  // textAlign: "center",
                  //     borderRadius: "10px",
                  width: "20%",
                  backgroundColor: "red",
                }}
              >
                {/* Image Wrapper */}
                {/* <div className="image-wrapper" style={{ position: "relative" }}> */}
                <div>
                  <img
                    src={image_path_new}
                    alt={imageFilename}
                    //   className="image"
                    //   style={{
                    //     maxWidth: "100%",
                    //     borderRadius: "10px",
                    //     marginBottom: "10px",
                    //   }
                    // }
                  />
                  <div
                  // className="image-overlay"
                  // style={{
                  //   position: "absolute",
                  //   bottom: "0",
                  //   left: "0",
                  //   right: "0",
                  //   background: "rgba(0, 0, 0, 0.5)",
                  //   color: "#fff",
                  //   padding: "5px",
                  //   textAlign: "center",
                  //   borderBottomLeftRadius: "10px",
                  //   borderBottomRightRadius: "10px",
                  // }}
                  >
                    {imageFilename.replace(".jpg", "").replace("_", " ")}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
