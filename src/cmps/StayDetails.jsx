import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { stayService } from "../services/stay.service.remote";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import GoogleMapReact from "google-map-react";

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
            <div className="top-nav-right-label">{`${stay.price} Per Guest`}</div>
            <div className="top-nav-right-button">Request</div>
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
                .map((amenity, index) => (
                  <div
                    className="stay-what-this-place-offer-list-item"
                    key={index}
                  >
                    {amenity}
                  </div>
                ))}
            </div>
            <div
              className="stay-what-this-place-offer-show-all"
              onClick={() => setIsAmenitiesModalOpen(true)}
            >{`Show all ${stay.amenities.length} Amenities`}</div>
            {isAmenitiesModalOpen && (
              <div className="stay-what-this-place-offer-modal-overlay">
                <div className="stay-what-this-place-offer-modal">
                  <div className="modal-close">
                    <IoClose
                      onClick={() => setIsAmenitiesModalOpen(false)}
                      size={24}
                    />
                  </div>
                  <div className="modal-title">What this place offers</div>
                  <div className="modal-amenity-list">
                    {stay.amenities.map((amenity, index) => (
                      <div className="modal-amenity-item" key={index}>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="stay-reviews-container">
            <div className="stay-reviews-title">Reviews</div>
            <div className="stay-reviews-list">
              {stay.reviews.map((review, index) => (
                <div key={index} className="stay-review-item">
                  <div className="stay-review-author">
                    <div className="author-avatar">
                      <img src={review.by.imgUrl} alt="alt" />
                    </div>
                    <div className="author-name">{review.by.fullname}</div>
                  </div>
                  <div className="stay-review-date">{` Written at: ${new Date(
                    review.at
                  ).toLocaleDateString()}`}</div>
                  <div className="stay-review-content">{review.txt}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="stay-location-container">
            <div className="stay-location-title">Where you’ll be</div>
            <div className="stay-location-subtitle">{stay.loc.address}</div>
            <div style={{ height: "80vh", width: "80%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                  lng: Math.abs(stay.loc.lan || stay.loc.lng),
                  lat: Math.abs(stay.loc.lat),
                }}
                defaultZoom={11}
              >
              </GoogleMapReact>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
