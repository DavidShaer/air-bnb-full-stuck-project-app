import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { stayService } from "../services/stay.service.remote";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export function StayDetails() {
  const { id } = useParams();
  const [isTopNavVisible, setIsTopNavVisible] = useState(false);
  const stayRightRef = useRef(null);
  const [stay, setStay] = useState(null);
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

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

    getStayByIdHandler();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getStayByIdHandler = async () => {
    try {
      const data = await stayService.getById(id);
      setStay(data);
    } catch (error) {
      console.log(error);
    }
  };

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
      {stay ? (
        <>
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
                  <div className="host-name">
                    Hosted by {stay.host.fullname}
                  </div>
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
          <div className="stay-summary">
            <div className="stay-summary-title">About this place</div>
            <div
              className={`stay-summary-content${isShowMoreOpen ? " open" : ""}`}
            >
              {stay.summary}
            </div>
            <div
              className="stay-summary-show-more"
              onClick={() => setIsShowMoreOpen(!isShowMoreOpen)}
            >
              <div>Show More</div>
              <IoIosArrowForward />
            </div>
          </div>
          <div className="stay-where-you-sleep">
            <div className="stay-where-you-sleep-title">Where you’ll sleep</div>
            <div className="stay-where-you-sleep-image">
              <img src={stay.imgUrls[0]} alt="Where you will sleep" />
            </div>
            <div className="stay-where-you-sleep-subtitle">Bedroom</div>
            <div className="stay-where-you-sleep-content">{`${stay.bedrooms} Queen bed`}</div>
          </div>
          <div className="stay-what-this-place-offer">
            <div className="stay-what-this-place-offer-title">
              What this place offers
            </div>
            <div className="stay-what-this-place-offer-list">
              {stay.amenities
                .filter((_, index) => index < 3)
                .map((amenity) => (
                  <div className="stay-what-this-place-offer-list-item">
                    {amenity}
                  </div>
                ))}
            </div>
            <div
              className="stay-what-this-place-offer-show-all"
              onClick={() => setIsAmenitiesModalOpen(true)}
            >{`Show all ${stay.amenities.length} Amenities`}</div>
            {isAmenitiesModalOpen && 
            <div className="stay-what-this-place-offer-modal-overlay">
              <div className="stay-what-this-place-offer-modal">
              <div className="modal-close">
                <IoClose onClick={() => setIsAmenitiesModalOpen(false)}/>
              </div>
                {stay.amenities.map((amenity) => (
                  <div>{amenity}</div>
                ))}
              </div>
            </div>
            }
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
