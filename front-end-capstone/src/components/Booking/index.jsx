import { useState } from "react";
import { Outlet } from "react-router-dom";

const BookingPage = () => {
    return (
        <main className='spacer-lg' id='bookingPage'>
            <section>
                <Outlet/>
            </section>
        </main>
    );
};

export default BookingPage;
