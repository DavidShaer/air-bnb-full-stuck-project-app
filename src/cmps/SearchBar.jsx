import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import WhoPopup from "./searchPopups/WhoPopup";
import WherePopup from "./searchPopups/WherePopup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckInOutCalendar from "./Calender";

const SearchBar = ({ isMainFilterClose, SearchClicked }) => {
  const [isRightLinkActive, setIsRightLinkActive] = useState(true);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckoutDate] = useState(null);
  const [where, setWhere] = useState("");

  const handleSetWhere = (destination) => {
    setWhere(destination);
    setIsDestinationOpen(false); // Close the destination popup after selection
  };

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
  const dateRef = useRef(null);
  const whoRef = useRef(null);

  const getSectionClass = (isOpen, otherSections) => {
    console.log("isOpen", isOpen);
    console.log("otherSections", otherSections);

    const areOthersClosed = otherSections.every((section) => !section);
    console.log("areOthersClosed", areOthersClosed);
    return isOpen || areOthersClosed ? "active-section" : "inactive-section";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is truly outside all date-related elements
      if (
        dateRef.current &&
        !dateRef.current.contains(event.target) &&
        // Add additional checks to prevent closing when interacting with calendar
        !event.target.closest(".react-datepicker") &&
        !event.target.closest(".calendar-container")
      ) {
        setIsCheckInOpen(false);
        setIsCheckOutOpen(false);
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

  const setCheckIn = (checkIn) => {
    setCheckInDate(checkIn);
  };
  const setCheckOut = (checkOut) => {
    setCheckoutDate(checkOut);
  };
  const onSearchClick = () => {
    // Implement your search logic here
    console.log("Search button clicked");
    console.log("Where:", where);
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Guests:", whoPopup);
    setIsGuestOpen(false);
    setIsCheckInOpen(false);
    setIsCheckOutOpen(false);
    setIsDatesOpen(false);
    setIsDestinationOpen(false);
    SearchClicked([where, checkInDate, checkOutDate, whoPopup]);
  };

  const isSearchBarOpen =
    isCheckInOpen ||
    isCheckOutOpen ||
    isDatesOpen ||
    isDestinationOpen ||
    isGuestOpen;

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
      <div
        className={`search-bar ${isSearchBarOpen ? "is-search-bar-open" : ""}`}
      >
        {/* where */}
        <div
          className={`search-section destination ${getSectionClass(
            isDestinationOpen,
            [isGuestOpen, isCheckOutOpen, isDatesOpen, isCheckInOpen]
          )}`}
          onClick={onDestinationOpen}
          ref={whereRef}
        >
          <div className="text-top">Where</div>
          <div className={`text-bottom ${where ? "where-text" : ""}`}>
            {where ? where : "Search destinations"}
          </div>
          {isDestinationOpen && <WherePopup onSetWhere={handleSetWhere} />}
        </div>

        {isRightLinkActive ? (
          <>
            {/* checkin */}
            <div
              className={`search-section checkin ${getSectionClass(
                isCheckInOpen,
                [isGuestOpen, isCheckOutOpen, isDatesOpen, isDestinationOpen]
              )}`}
              onClick={onCheckInOpen}
              ref={dateRef}
            >
              <div className="text-top">Check In</div>
              <div className={`text-bottom ${checkInDate ? "date-text" : ""}`}>
                {checkInDate ? checkInDate.toLocaleDateString() : "Add Dates"}
              </div>

              {isCheckInOpen && (
                <div>
                  <CheckInOutCalendar
                    onSetCheckIn={setCheckIn}
                    onSetCheckOut={setCheckOut}
                  />
                </div>
              )}
            </div>

            {/* checkout */}
            <div
              // className="search-section checkout"
              className={`search-section checkout ${getSectionClass(
                isCheckOutOpen,
                [isGuestOpen, isCheckInOpen, isDatesOpen, isDestinationOpen]
              )}`}
              onClick={onCheckOutOpen}
              ref={dateRef}
            >
              <div className="text-top">Check Out</div>
              <div className={`text-bottom ${checkOutDate ? "date-text" : ""}`}>
                {checkOutDate ? checkOutDate.toLocaleDateString() : "Add Dates"}
              </div>
              {isCheckOutOpen && (
                <div>
                  <CheckInOutCalendar
                    onSetCheckIn={setCheckIn}
                    onSetCheckOut={setCheckOut}
                    ref={dateRef}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          // experiences
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

        {/* who */}
        <div
          // className="search-section search"
          className={`search-section search ${getSectionClass(isGuestOpen, [
            isCheckInOpen,
            isCheckOutOpen,
            isDatesOpen,
            isDestinationOpen,
          ])}`}
          onClick={onGuestOpen}
          ref={whoRef}
        >
          {/* search click */}
          <div
            className={`search-icon-wrapper ${isGuestOpen ? "open" : ""}`}
            onClick={(event) => {
              event.stopPropagation();
              onSearchClick();
            }}
          >
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
                      <span key={category} className="guest-count-text">
                        {`${category}: ${count}`},
                      </span>
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
