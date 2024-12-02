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
  function SearchClickeHandle(searchInfoArr) {
    const where = searchInfoArr[0];
    const checkIn = searchInfoArr[1];
    const checkOut = searchInfoArr[2];
    const who = searchInfoArr[3];
    const { adults, childrens, infants, pets } = who;
    dispatch(
      setFilterBy({
        ...filterBy,
        where,
        checkIn,
        checkOut,
        who,
        adults,
        childrens,
        infants,
        pets,
      })
    );
  }

  return (
    <div className="app-container">
      <AppHeader SearchClicked={SearchClickeHandle} />
      <AppFilterNav categoryClickHandler={categoryClickHandler} />
      <AppGallery />
      <AppFooter />
    </div>
  );
}
