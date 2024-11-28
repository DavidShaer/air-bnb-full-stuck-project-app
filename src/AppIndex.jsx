import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppHeader } from "./cmps/AppHeader";
import { AppFilterNav } from "./cmps/AppFilterNav";
import { AppGallery } from "./cmps/AppGallery";
import { AppFooter } from "./cmps/AppFooter";
import { loadStays, setFilterBy } from "./store/stay.actions";
import { useSearchParams } from "react-router-dom";

export function AppIndex() {
  const dispatch = useDispatch();
  const { stays, filterBy } = useSelector((state) => state.stayModule);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(loadStays(filterBy));
  }, [filterBy]);

  function categoryClickHandler(image_name) {
    console.log("image_name ", image_name.replace(".jpg", "").replace("_", ""));
    const icon = image_name.replace(".jpg", "").replace("_", "");
    dispatch(setFilterBy({ ...filterBy, icon }));
  }
  function whereClickHandler(where) {
    console.log("where ", where);
    dispatch(setFilterBy({ ...filterBy, where }));
  }

  return (
    <div className="app-container">
      <AppHeader setWhere={whereClickHandler} />
      <AppFilterNav categoryClickHandler={categoryClickHandler} />
      <AppGallery />
      <AppFooter />
    </div>
  );
}
