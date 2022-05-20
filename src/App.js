import { useEffect, useState } from "react";
import BookingList from "./components/BookingList";
import axios from "axios";

function App() {
  const [bookings, setBookings] = useState("");
  const apiEndPoint = "https://greenhills.ge/bookinglist?format=json";
  useEffect(() => {
    const getBookings = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setBookings(res);
    };
    getBookings();
  }, []);

  return (
    <div className="App">
      <BookingList bookings={bookings} />
    </div>
  );
}

export default App;
