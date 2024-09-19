import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [isRightLinkActive, setIsRightLinkActive] = useState(true);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);

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
          className={`nav-link ${!isRightLinkActive ? "active" : ""}`}
          onClick={() => setIsRightLinkActive(false)}
        >
          חוויות
        </div>
        <div
          className={`nav-link ${isRightLinkActive ? "active" : ""}`}
          onClick={() => setIsRightLinkActive(true)}
        >
          שהיות
        </div>
      </div>
      <div className="search-bar">
        <div className="search-section search" onClick={onGuestOpen}>
          <IoSearch className="search-icon" size={35} />
          <div className="sreach-text-wrapper">
            <div className="text-top">מי</div>
            <div className="text-bottom">הוספת אורחים</div>
          </div>
          {isGuestOpen && <div>guest open</div>}
        </div>
        {isRightLinkActive ? (
          <>
            <div className="search-section checkin" onClick={onCheckInOpen}>
              <div className="text-top">צ'ק-אין</div>
              <div className="text-bottom">הוספת תאריכים</div>
              {isCheckInOpen && <div><input type="date" /></div>}
            </div>
            <div className="search-section checkout" onClick={onCheckOutOpen}>
              <div className="text-top">צ'ק-אאוט</div>
              <div className="text-bottom">הוספת תאריכים</div>
              {isCheckOutOpen && <div><input type="date" /></div>}
            </div>
          </>
        ) : (
          <div className="search-section date" onClick={onDatesOpen}>
            <div className="text-top">תאריך</div>
            <div className="text-bottom">הוספת תאריכים</div>
            {isDatesOpen && <div><input type="date" /></div>}
          </div>
        )}
        <div className="search-section destination" onClick={onDestinationOpen}>
          <div className="text-top">איפה</div>
          <div className="text-bottom">חיפוד יעדים</div>
          {isDestinationOpen && <div>destination open</div>}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
