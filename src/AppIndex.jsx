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

  function stayClickHandler(image_name) {
    console.log("image_name.replace", image_name.replace(".jpg", ""));
    dispatch(filterByIcon(image_name.replace(".jpg", "")));
  }

  return (
    <div className="app-continer">
      <AppHeader />
      <AppFilterNav stayClickHandler={stayClickHandler} />
      <AppGallery />
      <AppFooter />
    </div>
  );
}
