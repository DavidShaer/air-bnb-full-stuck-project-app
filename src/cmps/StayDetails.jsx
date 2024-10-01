import { useEffect, useState } from "react";
import { placeList,dummyData } from "../../information_and_starters/stay";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

export function StayDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

    const stay = dummyData.find((place) => place._id === id);
    console.log("stay: ", stay);


  return (
    <div className="stay-details-container">
      <div className="stay-details-top">
        <div className="top-title">{stay.name}</div>
        <div className="top-buttons">
          <div className="button-save">
            <FaRegHeart/>
            <div className="save-text">Save</div>
          </div>
          <div className="button-share">
            <IoShareOutline/>
            <div className="share-text">Share</div>
          </div>
        </div>
      </div>
      <div className="stay-details-gallery"></div>
    </div>
  );
}
