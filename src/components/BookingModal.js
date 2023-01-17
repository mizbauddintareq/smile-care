import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { errorAlert } from "./errorAlert";
import { successAlert } from "./successAlert";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  const { name, slots, price } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const bookingInfo = {
      appointmentDate: date,
      slot,
      treatment: name,
      patientName,
      email,
      phone,
      price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          successAlert("Booking Confirmed");
          setTreatment(null);
          refetch();
        } else {
          errorAlert(data.message);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative dark:bg-slate-900 dark:text-white">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle dark:bg-white dark:text-slate-900 bg-slate-900 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold dark:text-secondary">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-8"
          >
            <input
              type="text"
              value={date}
              readOnly
              disabled
              className="input dark:bg-slate-900 dark:text-white dark:border-accent w-full input-bordered "
            />

            <select
              name="slot"
              className="select dark:bg-slate-900 dark:text-white select-bordered w-full dark:border-accent"
            >
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              className="input w-full dark:bg-slate-900 dark:text-white dark:border-accent input-bordered "
            />

            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              className="input w-full dark:bg-slate-900 dark:text-white dark:border-accent input-bordered "
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input w-full dark:bg-slate-900 dark:text-white dark:border-accent input-bordered "
            />

            <input
              type="submit"
              value="submit"
              className="input btn btn-accent w-full input-bordered dark:border-accent dark:bg-white dark:text-slate-900"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
