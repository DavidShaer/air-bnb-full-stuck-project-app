import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function AppFilterNav({ categoryClickHandler }) {
  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#FFD700",
        border: "none",
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
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#FFD700",
        border: "none",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        cursor: "pointer",
        zIndex: 10,
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

  const items = [
    { id: 1, name: "Item 1", color: "#FFD700" },
    { id: 2, name: "Item 2", color: "#FF5733" },
    { id: 3, name: "Item 3", color: "#33FF57" },
    { id: 4, name: "Item 4", color: "#337DFF" },
    { id: 5, name: "Item 5", color: "#FF33A6" },
  ];

  return (
    <div className="app-filter-nav">
      <div className="filter-container">
        <Carousel
          responsive={responsive}
          infinite
          // autoPlay
          autoPlaySpeed={3000}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "10px",
                backgroundColor: item.color,
                borderRadius: "10px",
                textAlign: "center",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
