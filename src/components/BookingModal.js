import { format } from "date-fns";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;

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
      name,
      patientName,
      email,
      phone,
    };
    console.log(bookingInfo);
    setTreatment(null);
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
              placeholder="Full Name"
              className="input w-full dark:bg-slate-900 dark:text-white dark:border-accent input-bordered "
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input w-full dark:bg-slate-900 dark:text-white dark:border-accent input-bordered "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
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
