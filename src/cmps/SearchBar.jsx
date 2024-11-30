import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import WhoPopup from "./searchPopups/WhoPopup";
import WherePopup from "./searchPopups/WherePopup";

const SearchBar = ({ isMainFilterClose, setWhere }) => {
  const [isRightLinkActive, setIsRightLinkActive] = useState(true);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);

  // set
  const [whoPopup, setWhoPopup] = useState({
    adults: 0,
    childrens: 0,
    infants: 0,
    pets: 0,
  });
  // Add useEffect and ref
  const searchBarRef = useRef(null);
  const whereRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (whereRef.current && !whereRef.current.contains(event.target)) {
        setIsDestinationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isGuestsEmpty = Object.entries(whoPopup).every(
    ([category, count]) => count === 0
  );

  const onDestinationOpen = () => {
    setIsGuestOpen(false);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);
    setIsDatesOpen(false);
    setIsDestinationOpen(true);
  };
  const onCheckInOpen = () => {
    setIsGuestOpen(false);
    setIsCheckInOpen(true);
    setIsCheckOutOpen(false);
    setIsDatesOpen(false);
    setIsDestinationOpen(false);
  };
  const onCheckOutOpen = () => {
    setIsGuestOpen(false);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(true);
    setIsDatesOpen(false);
    setIsDestinationOpen(false);
  };
  const onDatesOpen = () => {
    setIsGuestOpen(false);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);
    setIsDatesOpen(true);
    setIsDestinationOpen(false);
  };
  const onGuestOpen = () => {
    setIsGuestOpen(true);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);
    setIsDatesOpen(false);
    setIsDestinationOpen(false);
  };

  return (
    <div
      className={`search-bar-container ${isMainFilterClose}`}
      ref={searchBarRef}
    >
      <div className="search-bar-nav">
        <div
          className={`nav-link ${isRightLinkActive ? "active" : ""}`}
          onClick={() => setIsRightLinkActive(true)}
        >
          Stays
        </div>
        <div
          className={`nav-link ${!isRightLinkActive ? "active" : ""}`}
          onClick={() => setIsRightLinkActive(false)}
        >
          Experiences
        </div>
      </div>
      <div className="search-bar">
        <div
          // className="search-section destination"
          className={`search-section destination ${isDestinationOpen ? "open" : ""}`}
          onClick={onDestinationOpen}
          ref={whereRef}
        >
          <div className="text-top">Where</div> 
          <div className="text-bottom">Search destinations</div>
          {isDestinationOpen && <WherePopup onSetWhere={setWhere} />}
        </div>
        {isRightLinkActive ? (
          <>
            <div className="search-section checkin" onClick={onCheckInOpen}>
              <div className="text-top">Check In</div>
              <div className="text-bottom">Add Dates</div>
              {isCheckInOpen && (
                <div>
                  <input type="date" />
                </div>
              )}
            </div>
            <div className="search-section checkout" onClick={onCheckOutOpen}>
              <div className="text-top">Check Out</div>
              <div className="text-bottom">Add Dates</div>
              {isCheckOutOpen && (
                <div>
                  <input type="date" />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="search-section date" onClick={onDatesOpen}>
            <div className="text-top">Date</div>
            <div className="text-bottom">Add Dates</div>
            {isDatesOpen && (
              <div>
                <input type="date" />
              </div>
            )}
          </div>
        )}
        <div className="search-section search" onClick={onGuestOpen}>
          <div className={`search-icon-wrapper ${isGuestOpen ? "open" : ""}`}>
            <IoSearch className="search-icon" size={55} />
            <div className="search-text">Search</div>
          </div>
          <div className="sreach-text-wrapper">
            <div className="text-top">Who</div>
            <div className="text-bottom">
              {isGuestsEmpty ? (
                <div>Add guests</div>
              ) : (
                <div className="guestsDetails">
                  {Object.entries(whoPopup)
                    .filter(([category, count]) => count !== 0)
                    .map(([category, count]) => (
                      <span>{`${category}: ${count}`}</span>
                    ))}
                </div>
              )}
            </div>
          </div>
          {isGuestOpen && (
            <WhoPopup whoPopup={whoPopup} setWhoPopup={setWhoPopup} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
