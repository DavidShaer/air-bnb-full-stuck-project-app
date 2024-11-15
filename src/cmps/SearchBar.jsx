import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import WhoPopup from "./searchPopups/WhoPopup";

const SearchBar = () => {
  const [isRightLinkActive, setIsRightLinkActive] = useState(true);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [whoPopup, setWhoPopup] = useState({
    adults: 0,
    childrens: 0,
    infants: 0,
    pets: 0,
  });
  const isGuestsEmpty = Object.entries(whoPopup).every(
    ([category,count]) => count === 0
  );

  const onGuestOpen = () => {
    setIsGuestOpen(true);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);
    setIsDatesOpen(false);
    setIsDestinationOpen(false);
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
  const onDestinationOpen = () => {
    setIsGuestOpen(false);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);
    setIsDatesOpen(false);
    setIsDestinationOpen(true);
  };

  return (
    <div className="search-bar-container">
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
        <div className="search-section destination" onClick={onDestinationOpen}>
          <div className="text-top">Where</div>
          <div className="text-bottom">Search destinations</div>
          {isDestinationOpen && <div>destination open</div>}
        </div>
        {isRightLinkActive ? (
          <>
            <div className="search-section checkin" onClick={onCheckInOpen}>
              <div className="text-top">CHeck In</div>
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
            <IoSearch className="search-icon" size={35} />
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
