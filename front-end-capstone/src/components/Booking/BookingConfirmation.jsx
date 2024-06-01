import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BookingConfirmation = () => {
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState({});

    useEffect(() => {
        const res = window.localStorage.getItem('little-lemon-res');
        if (res) {
            const data = JSON.parse(res);

            // If booking is in the past clear local storage
            if (new Date(data.date + '' + data.time) >= new Date()) {
                window.localStorage.removeItem('little-lemon-res');
            } else {
                setBooking(data);
            }

        }

        setLoading(false);
    }, [])



    if (!loading && Object.keys(booking).length <= 0) {
        return (
            <div className='container align-center' style={{ display: "grid", gap: "2rem" }}>
                <h1 className="display">No booking to confirm</h1>
                <button aria-label="On Click" className="specials">
                    <Link to="/booking">Make a reservation now</Link>
                </button>
            </div>
        )
    }

    return (
        <div className='container' style={{ display: "grid", maxWidth: "320px", gap: "1rem" }}>
            <h1 className='display'>Booking Confirmation</h1>
            <p className="lead">Your reservation for <b>{booking.date}</b> at <b>{booking.time}</b> is confirmed!</p>
            <p className="lead">We are looking forward to hosting your party of <b>{booking.guests}</b> for your <b>{booking.occasion}</b> event </p>


            <div className='flex between spacer-md'>
                <button aria-label="On Click" className='specials'>
                    <Link to='#menu'>View Menu</Link>
                </button>
                <button aria-label="On Click" className='specials'>
                    <Link to='/'>Home</Link>
                </button>
            </div>
        </div>
    );
}