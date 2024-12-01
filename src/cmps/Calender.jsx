import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyles.css"; // Custom styles

export function CheckInOutCalendar({ onSetCheckIn, onSetCheckOut }) {
  const [checkIn, setcheckIn] = useState(null);
  const [checkOut, setcheckOut] = useState(null);

  const handleDateChange = (dates) => {
    // console.log("dates ", dates);
    const [checkInNew, checkOutNew] = dates;
    if (checkInNew !== checkIn) {
      console.log("checkInNew ", checkInNew);
      onSetCheckIn(checkInNew);
      setcheckIn(checkInNew);
    }
    if (checkOutNew !== checkOut) {
      console.log("checkOutNew ", checkOutNew);
      onSetCheckOut(checkOutNew);
      setcheckOut(checkOutNew);
    }
  };

  const dates = [checkIn, checkOut]; // Define dates using state values

  return (
    <div className="calendar-overlay">
      <div className="calendar-container">
        <Calendar
          selectRange
          onChange={handleDateChange}
          value={dates} // Use the defined dates
          minDate={new Date()}
          className="custom-calendar"
          showDoubleView={true} // Display two months side by side
        />
      </div>
    </div>
  );
}

export default CheckInOutCalendar;
