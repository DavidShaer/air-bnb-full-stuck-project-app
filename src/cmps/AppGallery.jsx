import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector
import { MdIosShare } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function AppGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  // const [placeList, setplaceList] = useState([]);
  const navigate = useNavigate();

  // Get stays from the Redux store
  const stays = useSelector((state) => state.stayModule.stays);
  console.log("stays", stays);

  const modalOpenHandler = (cardId) => {
    setIsModalOpen(true);
    const card = stays.find((place) => place._id === cardId);
    setCurrentCard(card);
  };

  function hundleStayClick(stayId) {
    navigate(`rooms/${stayId}`);
  }

  return (
    <div className="app-gallery">
      {stays.map((place) => (
        <div
          key={place._id}
          className="gallery-item"
          onClick={() => hundleStayClick(place._id)}
        >
          <div className="item-image-wrapper">
            <MdIosShare
              className="item-share-icon"
              onClick={() => modalOpenHandler(place._id)}
            />
            <div className="item-image">
              <img src={place.imgUrls[0]} alt="" />
            </div>
          </div>
          <div className="item-content">{place.name}</div>
        </div>
      ))}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="gallery-modal">
            <IoMdClose
              className="modal-close-icon"
              onClick={() => setIsModalOpen(false)}
            />
            <div className="topText">Share this Experience</div>
            {currentCard && (
              <div className="modal-info">
                <div className="modal-image-wrapper">
                  <img src={currentCard.imgUrls[0]} alt="" />
                </div>
                <div className="info-text">{currentCard.name}</div>
              </div>
            )}
            <div className="share-media-wrapper">
              <button className="gallery-btn">Copy link</button>
              <button className="gallery-btn">Email</button>
              <button className="gallery-btn">Messages</button>
              <button className="gallery-btn">Whatsapp</button>
              <button className="gallery-btn">Messanger</button>
              <button className="gallery-btn">Facebook</button>
              <button className="gallery-btn">Twitter</button>
              <button className="gallery-btn">More Options</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
