import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const WhoPopup = ({ whoPopup, setWhoPopup }) => {
  const onCounterClick = (category, sign) => {
    switch (category) {
      case "adults":
        setWhoPopup((prev) => ({...prev, adults: handleCountChange(whoPopup.adults, sign)}));
        break;
      case "childrens":
        setWhoPopup((prev) => ({...prev, childrens: handleCountChange(whoPopup.childrens, sign)}));
        break;
      case "infants":
        setWhoPopup((prev) => ({...prev, infants: handleCountChange(whoPopup.infants, sign)}));
        break;
      case "pets":
        setWhoPopup((prev) => ({...prev, pets: handleCountChange(whoPopup.pets, sign)}));
        break;
    }
  };

  const handleCountChange = (lastCount, sign) => {
    if(sign === "plus") {
      const newCount = lastCount + 1;
      return newCount;
    }else {
      if(lastCount === 0) return 0;
      const newCount = lastCount - 1;
      return newCount;
    }
  }

  return (
    <div className="popup-who">
      <div className="who-item">
        <div className="who-content">
          <div className="content-title">Adults</div>
          <div className="content-info">Ages 13 or above</div>
        </div>
        <div className="who-buttons">
          <CiCircleMinus className="who-btn" onClick={() => onCounterClick("adults", "minus")}/>
          <div className="who-counter">{whoPopup.adults}</div>
          <CiCirclePlus className="who-btn" onClick={() => onCounterClick("adults", "plus")}/>
        </div>
      </div>
      <div className="who-item">
        <div className="who-content">
          <div className="content-title">Children</div>
          <div className="content-info">2-12</div>
        </div>
        <div className="who-buttons">
          <CiCircleMinus className="who-btn" onClick={() => onCounterClick("childrens", "minus")}/>
          <div className="who-counter">{whoPopup.childrens}</div>
          <CiCirclePlus className="who-btn" onClick={() => onCounterClick("childrens", "plus")}/>
        </div>
      </div>
      <div className="who-item">
        <div className="who-content">
          <div className="content-title">Infants</div>
          <div className="content-info">Under 2</div>
        </div>
        <div className="who-buttons">
          <CiCircleMinus className="who-btn" onClick={() => onCounterClick("infants", "minus")}/>
          <div className="who-counter">{whoPopup.infants}</div>
          <CiCirclePlus className="who-btn" onClick={() => onCounterClick("infants", "plus")}/>
        </div>
      </div>
      <div className="who-item">
        <div className="who-content">
          <div className="content-title">Pets</div>
          <div className="content-info">Bringing a service animal?</div>
        </div>
        <div className="who-buttons">
          <CiCircleMinus className="who-btn" onClick={() => onCounterClick("pets", "minus")}/>
          <div className="who-counter">{whoPopup.pets}</div>
          <CiCirclePlus className="who-btn" onClick={() => onCounterClick("pets", "plus")}/>
        </div>
      </div>
    </div>
  );
};

export default WhoPopup;
