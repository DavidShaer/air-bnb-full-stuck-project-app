import React, { useState } from "react";
import { dummyData } from "../../information_and_starters/stay";
import { MdIosShare } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const AppGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const modalOpenHandler = (cardId) => {
    setIsModalOpen(true);
    const card = dummyData.find((place) => place._id === cardId);
    setCurrentCard(card);
  };

  return (
    <div className="app-gallery">
      {dummyData.map((place) => (
        <div key={place._id} className="gallery-item">
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
};

export default AppGallery;
