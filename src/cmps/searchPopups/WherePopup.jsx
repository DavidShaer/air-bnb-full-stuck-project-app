import React from "react";

export function WherePopup({ onSetWhere }) {
  return (
    <div className="popup-where">
      <div className="where-item-wrapper">
        <div className="where-item" onClick={() => onSetWhere("flexible")}>
          <img
            src={
              "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320"
            }
            alt="flexible"
          />
          I'm flexible
        </div>
        <div className="where-item" onClick={() => onSetWhere("middle-east")}>
          <img
            src="https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320"
            alt="Middle East"
          />
          Middle East
        </div>
        <div className="where-item" onClick={() => onSetWhere("italy")}>
          <img
            src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"
            alt="Italy"
          />
          Italy
        </div>
        <div className="where-item" onClick={() => onSetWhere("united-states")}>
          <img
            src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
            alt="United States"
          />
          United States
        </div>
        <div className="where-item" onClick={() => onSetWhere("greece")}>
          <img
            src="https://a0.muscache.com/im/pictures/09be1400-6a42-4a4f-90f6-897e50110031.jpg?im_w=320"
            alt="Greece"
          />
          Greece
        </div>
        <div
          className="where-item"
          onClick={() => onSetWhere("southeast-asia")}
        >
          <img
            src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
            alt="Southeast Asia"
          />
          Southeast Asia
        </div>
      </div>
    </div>
  );
}

export default WherePopup;
