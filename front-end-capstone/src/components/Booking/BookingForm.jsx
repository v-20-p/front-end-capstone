import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { fetchAPI, submitAPI } from "../../utils/api";

const BookingOccasions = [
    'Birthday',
    'Engagement',
    'Anniversary',
    'Other'
]

const occasionRegex = new RegExp(BookingOccasions.join('|'), 'g')

export const BookingForm = ({updateLS}) => {
    const navigate = useNavigate();
    const [times, setTimes] = useState([]);

    const date = new Date().toISOString().split("T")[0];

    const updateTimes = (date) => {
        setTimes(fetchAPI(new Date(date)));
    };

    const submitForm = (data) => {
        const res = submitAPI( data );
        if (res) {
            updateLS(data);
            window.localStorage.setItem('little-lemon-res', JSON.stringify(data));
            navigate('./confirmation');
        } else {
            // Show form error
        }
    }

    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().split("T")[0],
            time: '',
            guests: '1',
            occasion: ''
        },
        onSubmit: (values) => {
            submitForm(values)
        },
        validationSchema: Yup.object({
            date: Yup.date().default(() => date).required('Required'),
            time: Yup.string().required('Required'),
            guests: Yup.number().min(1, "Must be at least 1 person").max(10, "Please call for more than 10 guests").required('Required'),
            occasion: Yup.string().matches(occasionRegex, 'Please select a valid option').required('Required')
        })
    })

    const handleDate = (e) => {
        formik.setFieldValue('date', e.target.value)
        formik.setFieldValue('time', '')
    }


    useEffect(() => {
        updateTimes(formik.values.date);
    }, [formik.values.date]);


    return (
        <div className='container' style={{ display: "grid", maxWidth: "300px", gap: "2rem" }}>
            <h1 className='display'>Book Now</h1>
            <form style={{ display: "grid", gap: "0.5rem" }} onSubmit={formik.handleSubmit}>
                <label className='lead' htmlFor='res-date'>
                    Choose date
                </label>
                <input
                    className={formik.errors.date ? "error" : ""}
                    type='date'
                    name="res-date"
                    id='res-date'
                    value={date}
                    onChange={handleDate}
                    onBlur={formik.handleBlur}
                />
                <div className='error-msg'>{formik.touched.date && formik.errors.date}</div>

                <label className='lead' htmlFor='res-time'>
                    Choose time
                </label>
                <div className='error-msg'>{formik.touched.time && formik.errors.time}</div>
                {times.length > 0 ? (
                    <div data-testid={"time-table"} className='flex' style={{ flexWrap: "wrap", gap: "1rem" }}>
                        {times.map((time) => (
                            <button
                            aria-label="On Click"
                                key={time}
                                type='button'
                                data-testid={time}
                                className={"specials " + (formik.values.time === time ? "active" : "")}
                                onClick={(e) => {
                                    formik.setFieldValue('time', e.target.innerHTML)
                                }}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                ) : (
                    <p>No available times</p>
                )}

                <label className='lead' htmlFor='guests'>
                    Number of guests
                </label>
                <input
                    id='guests'
                    type='number'
                    placeholder='1'
                    className={formik.touched.guests && formik.errors.guests ? "error" : ""}
                    {...formik.getFieldProps('guests')}
                    // value={guests}
                    // onChange={(e) => setGuests(e.target.value)}
                />
                <div className='error-msg'>{formik.touched.guests && formik.errors.guests}</div>

                <label className='lead' htmlFor='occasion'>
                    Occasion
                </label>
                <select
                    className={formik.touched.occasion && formik.errors.occasion ? "error" : ""}
                    id='occasion'
                    {...formik.getFieldProps('occasion')}
                >
                    <option>Select an occasion</option>
                    {BookingOccasions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                            {occasion}
                        </option>
                    ))}
                </select>
                <div className='error-msg'>{formik.touched.occasion && formik.errors.occasion}</div>

                <button aria-label="On Click" className='specials' type='submit' data-testid='submit'>
                    Make Your reservation
                </button>
            </form>
        </div>
    );
};
