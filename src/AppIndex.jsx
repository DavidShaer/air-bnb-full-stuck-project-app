import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppHeader } from "./cmps/AppHeader";
import { AppFilterNav } from "./cmps/AppFilterNav";
import { AppGallery } from "./cmps/AppGallery";
import { AppFooter } from "./cmps/AppFooter";
import { loadStays, filterByIcon } from "./store/stay.actions";

export function AppIndex() {
  // ????????
  const dispatch = useDispatch();
  const { stays } = useSelector((state) => state.stayModule);

  useEffect(() => {
    dispatch(loadStays());
  }, [dispatch]);

  function iconClickHandler(image_name) {
    dispatch(filterByIcon(image_name.replace(".jpg", "")));
  }

  return (
    <div className="app-continer">
      <AppHeader />
      <AppFilterNav stayClickHandler={iconClickHandler} />
      <AppGallery />
      <AppFooter />
    </div>
  );
}
