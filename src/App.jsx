import { Router, Routes, Route } from "react-router-dom";
import { AppIndex } from "./AppIndex";
import { StayDetails } from "./cmps/StayDetails";

export function App() {
  return (
    <Routes>
      <Route path="air-bnb-full-stuck-project" element={<AppIndex />} />
      <Route
        path="air-bnb-full-stuck-project/rooms/:id"
        element={<StayDetails />}
      />
    </Routes>
  );
}
