import React from "react";
import { Routes, Route } from "react-router";

import { HomePage } from "./pages/HomePage";
import { AboutUs, AboutTeam, AboutVision } from "./pages/AboutUs";
import { CarIndex } from "./pages/CarIndex.jsx";
import { BoardIndex } from "./pages/BoardIndex.jsx";
import { ReviewIndex } from "./pages/ReviewIndex.jsx";
import { ChatApp } from "./pages/Chat.jsx";
import { AdminIndex } from "./pages/AdminIndex.jsx";

import { CarDetails } from "./pages/CarDetails";
import { UserDetails } from "./pages/UserDetails";
import { BoardDetails } from "./pages/BoardDetails";
import { TaskDetails } from "./pages/TaskDetails";

import { AppHeader } from "./cmps/AppHeader";
import { AppFooter } from "./cmps/AppFooter";
import { AppFilterNav } from "./cmps/AppFilterNav.jsx";
import { AppIndex } from "./cmps/AppIndex.jsx";
import AppGallery from "./cmps/AppGallery.jsx";

export function RootCmp() {
  return (
    <div className="app-container">
      <div className="app-header">
        <AppHeader />
      </div>
      <div className="app-filter-nav">
        <AppFilterNav />
      </div>
      <AppGallery/>
      {/* <div className="app-index">
        <AppIndex />
      </div>
      <div className="app-footer">
        <AppFooter />
      </div> */}
    </div>
  );
}
