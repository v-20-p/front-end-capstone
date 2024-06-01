/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import {BookingForm} from './components/Booking/BookingForm';
import { BrowserRouter } from "react-router-dom";
import { fetchAPI } from "./utils/api";

const date = new Date().toISOString().split('T')[0]
const times = fetchAPI(new Date(date));

test('Renders the BookingForm heading', () => {
    render(<BrowserRouter><BookingForm/></BrowserRouter>)
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})


test('Initialize times', async () => {
    const times = fetchAPI(new Date(date));

    render(<BrowserRouter><BookingForm/></BrowserRouter>)

    const timeButtons = screen.getAllByRole('button');
    // Expect times elements to be equal to times length
    // + 1 for reservation button
    expect(timeButtons.length).toBe(times.length + 1);
})

test('Update availble times when date changes ', async () => {

    render(<BrowserRouter><BookingForm/></BrowserRouter>)
    const dateInput = screen.getByLabelText('Choose date');

    fireEvent.change(dateInput, {target: {value: date }})

    const timeButtons = screen.getAllByRole('button');
    // Expect times elements to be equal to times length
    // + 1 for reservation button
    expect(timeButtons.length).toBe(times.length + 1);
})

// test('Invalid date field', async () => {
//     const updateLS = jest.fn();
//     render(<BookingForm updateLS={updateLS}/>, {wrapper: BrowserRouter})

//     const dateInput = screen.getByLabelText('Choose date');
//     await waitFor(() => act(() => {
//         dateInput.dispatchEvent(new InputEvent("change", { data: 'Chicken' }));
//     }));
//     // fireEvent.change(dateInput, {target: {value: 'Chicken' }})

//     expect(dateInput.classList[0]).toBe('error')
// })
// test('Invalid guest field', () => {
//     const user = userEvent.setup();

//     render(<BrowserRouter><BookingForm/></BrowserRouter>)

//     const guestInput = screen.getByLabelText('Number of guests');
//     act(() => {
//         guestInput.dispatchEvent(new InputEvent("change", { data: 20 }));
//     });
//     // user.change(guestInput, {target: {value: '20' }})
//     console.log('guest', guestInput.classList);
//     expect(guestInput.className[0]).toBe('Select an occasion')

// })
// test('Invalid occasion field', () => {
//     render(<BrowserRouter><BookingForm/></BrowserRouter>)

//     const occasionInput = screen.getByLabelText('Occasion');
//     fireEvent.change(occasionInput, {target: {value: 'Pizza Party' }})

//     expect(occasionInput.value).toBe('Select an occasion')
// })


// test('Submit form and check local storage is updated', async () => {
//     const user = userEvent.setup();

//     const guests = "4";
//     const occasion = 'Birthday';
//     const updateLS = jest.fn();

//     render(<BookingForm updateLS={updateLS}/>, {wrapper: BrowserRouter})

//     const dateInput = screen.getByLabelText('Choose date');
//     // fireEvent.change(dateInput, {target: {value: date }})
//     act(() => {
//         dateInput.dispatchEvent(new InputEvent("change", { data: date }));
//     });

//     const timeButton = screen.getByTestId(times[0]);
//     fireEvent.click(timeButton);
//     // act(() => {
//     //     timeButton.dispatchEvent(new MouseEvent("click"));
//     // });


//     const guestInput = screen.getByLabelText('Number of guests');
//     // fireEvent.change(guestInput, {target: {value: guests }})
//     act(() => {
//         guestInput.dispatchEvent(new InputEvent("change", { data: guests }));
//     });

//     const occasionInput = screen.getByLabelText('Occasion');
//     // fireEvent.change(occasionInput, {target: {value: occasion }})
//     act(() => {
//         occasionInput.dispatchEvent(new InputEvent("change", { data: occasion }));
//     });

//     const submitButton = screen.getByTestId('submit');
//     user.click(submitButton);
//     // act(() => {
//     //     submitButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     // });
//     expect(updateLS).toHaveBeenCalledWith({
//         date: date,
//         time: times[0],
//         guests: guests,
//         occasion: occasion,
//       })
// })
