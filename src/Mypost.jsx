import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

export default function Mypost({ post }) {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  return (
    <div>
      <h1>Calendar {new Date().getFullYear()}</h1>
      <Calendar
        localizer={localizer}
        events={post}
        titleAccessor={(booking) =>
          `${booking.cottage} ${booking.first_name} ${booking.last_name} - ${booking.mobile}`
        }
        startAccessor={(booking) => new Date(booking.check_in)}
        endAccessor={(booking) => new Date(booking.check_out)}
        popup={true}
        style={{
          height: 750,
          margin: "50px",
        }}
      />
    </div>
  );
}
