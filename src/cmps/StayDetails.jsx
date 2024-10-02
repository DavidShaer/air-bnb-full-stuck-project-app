import { useEffect, useRef, useState } from "react";
import { placeList, dummyData } from "../../information_and_starters/stay";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export function StayDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isTopNavVisible, setIsTopNavVisible] = useState(false);
  const stayRightRef = useRef(null);

  console.log(isTopNavVisible);

  useEffect(() => {
    const handleScroll = () => {
      if (stayRightRef.current) {
        const stayRightRect = stayRightRef.current.getBoundingClientRect();
        const offset = window.pageYOffset || document.documentElement.scrollTop;
        if (stayRightRect.top + offset <= offset) {
          setIsTopNavVisible(true);
        } else {
          setIsTopNavVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stay = dummyData.find((place) => place._id === id);

  return (
    <div className="stay-details-container">
      {isTopNavVisible && (
        <div className="top-nav">
          <div className="top-nav-left">
            <NavLink to="air-bnb-full-stuck-project">Photos</NavLink>
            <NavLink to="air-bnb-full-stuck-project">Reviews</NavLink>
            <NavLink to="air-bnb-full-stuck-project">Location</NavLink>
          </div>
          <div className="top-nav-right">
            <div className="top-nav-right-label">Coming October 8</div>
            <div className="top-nav-right-button">Notify Me</div>
          </div>
        </div>
      )}
      <div className="stay-details-top">
        <div className="top-title">{stay.name}</div>
        <div className="top-buttons">
          <div className="button-save">
            <FaRegHeart size={25} />
            <div className="save-text">Save</div>
          </div>
          <div className="button-share">
            <IoShareOutline size={25} />
            <div className="share-text">Share</div>
          </div>
        </div>
      </div>
      <div className="stay-details-gallery">
        <div className="gallery-grid">
          <div className="left">
            <img src={stay.imgUrls[0]} />
          </div>
          <div className="middle">
            <img src={stay.imgUrls[1]} />
            <img src={stay.imgUrls[2]} />
          </div>
          <div className="right">
            <img src={stay.imgUrls[3]} />
            <img src={stay.imgUrls[4]} />
          </div>
        </div>
      </div>
      <div className="stay-adress" ref={stayRightRef}>
        <div className="stay-left">
          <div className="stay-left-top">
            <div className="stay-left-address">{stay.loc.address}</div>
            <div className="stay-left-details">{`guests: ${stay.capacity} · bathrooms:${stay.bathrooms} · beds:${stay.bedrooms} · ${stay.roomType} `}</div>
            <div className="stay-left-reviews">
              <FaStar />
              <div>{`5.0 · ${stay.reviews.length} reviews `}</div>
            </div>
          </div>
          <div className="stay-left-bottom">
            <div className="stay-left-bottom-image">
              <img src={stay.imgUrls[0]} />
            </div>
            <div className="stay-left-bottom-content">
              <div className="host-name">{stay.host.fullname}</div>
              <div className="host-location">{stay.host.location}</div>
            </div>
          </div>
        </div>
        <div className="stay-right">
          <div className="stay-right-container">
            <div className="stay-right-label">Coming October 8</div>
            <div className="stay-right-button">Notify Me</div>
          </div>
        </div>
      </div>
      <div style={{ height: "1500px" }}>very height div,delete later</div>
    </div>
  );
}
