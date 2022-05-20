import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import collect from "collect.js";

export default function BookingList({ bookings }) {
  const [checked, setChecked] = useState([]);

  const localizer = momentLocalizer(moment);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  function getBookings() {
    let newBookings = collect(bookings);

    if (checked.length) {
      newBookings = newBookings.whereIn(
        "cottage",
        [...checked].map((value) => {
          return parseInt(value, 10);
        })
      );
    }

    return [...newBookings];
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <h1 className="text-center mt-3 fs-2">
          Greenhills - ჯავშნების კალენდარი
        </h1>
        <div className="col-md-6 bg-light rounded-3 shadow-sm py-3 px-2">
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="cottage1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="1"
                  id="cottage1"
                  onChange={handleCheck}
                />
                კოტეჯი 1
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="cottage2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="2"
                  id="cottage2"
                  onChange={handleCheck}
                />
                კოტეჯი 2
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="cottage3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="3"
                  id="cottage3"
                  onChange={handleCheck}
                />
                კოტეჯი 3
              </label>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-2">
            <div className="form-check">
              <label className="form-check-label" htmlFor="room4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="4"
                  id="room4"
                  onChange={handleCheck}
                />
                ოთახი 1
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="room5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="5"
                  id="room5"
                  onChange={handleCheck}
                />
                ოთახი 2
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="room6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="6"
                  id="room6"
                  onChange={handleCheck}
                />
                ოთახი 3
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="room7">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="7"
                  id="room7"
                  onChange={handleCheck}
                />
                ოთახი 4
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="room8">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="8"
                  id="room8"
                  onChange={handleCheck}
                />
                ოთახი 5
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="room9">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="9"
                  id="room9"
                  onChange={handleCheck}
                />
                ოთახი 6
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Calendar
            localizer={localizer}
            events={getBookings()}
            titleAccessor={(booking) =>
              `${
                booking.cottage === 1
                  ? "კოტეჯი 1"
                  : booking.cottage === 2
                  ? "კოტეჯი 2"
                  : booking.cottage === 3
                  ? "კოტეჯი 3"
                  : booking.cottage === 4
                  ? "ოთახი 1"
                  : booking.cottage === 5
                  ? "ოთახი 2"
                  : booking.cottage === 6
                  ? "ოთახი 3"
                  : booking.cottage === 7
                  ? "ოთახი 4"
                  : booking.cottage === 8
                  ? "ოთახი 5"
                  : booking.cottage === 9
                  ? "ოთახი 6"
                  : booking.cottage
              } - ${booking.first_name} ${booking.last_name} - ${
                booking.mobile
              }`
            }
            startAccessor={(booking) => new Date(booking.check_in)}
            endAccessor={(booking) => new Date(booking.check_out)}
            popup={true}
            defaultView="month"
            style={{
              height: 650,
              margin: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
