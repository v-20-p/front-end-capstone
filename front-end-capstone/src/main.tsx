import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookingPage from './components/Booking'
import HomePage from './components/HomePage.jsx'
import { BookingConfirmation } from './components/Booking/BookingConfirmation.jsx'
import { BookingForm } from './components/Booking/BookingForm.jsx'

const updateLS = (data) => window.localStorage.setItem('little-lemon-res', JSON.stringify(data));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route index element={<HomePage/>}/>
        <Route path="/booking" element={<BookingPage/>}>
          <Route index element={<BookingForm updateLS={updateLS}/>}/>
          <Route path="/booking/confirmation" element={<BookingConfirmation/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>,
)
