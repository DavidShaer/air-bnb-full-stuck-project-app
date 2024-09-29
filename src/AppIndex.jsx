import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppHeader } from "./cmps/AppHeader";
import { AppFilterNav } from "./cmps/AppFilterNav";
import { AppGallery } from "./cmps/AppGallery";
import { AppFooter } from "./cmps/AppFooter";
import { loadStays, filterByIcon } from "./store/stay.actions";
import { useSearchParams } from "react-router-dom";

export function AppIndex() {
  const dispatch = useDispatch();
  const { stays } = useSelector((state) => state.stayModule);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(loadStays());
  }, [dispatch]);

  function categoryClickHandler(image_name) {
    console.log("image_name ", image_name.replace(".jpg", "").replace("_", ""));
    dispatch(filterByIcon(image_name.replace(".jpg", "").replace("_", "")));
    setSearchParams({ category: image_name.replace(".jpg", "") });
  }

  return (
    <div className="app-container">
      <AppHeader />
      <AppFilterNav categoryClickHandler={categoryClickHandler} />
      <AppGallery />
      <AppFooter />
    </div>
  );
}
