const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-lg dark:bg-accent">
      <div className="card-body">
        <h2 className="text-center text-xl font-semibold text-secondary">
          {name}
        </h2>
        <p className="text-center">
          {slots.length > 0 ? slots[0] : "Try another day"}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(appointmentOption)}
            className="btn text-white font-bold btn-primary bg-gradient-to-r from-primary to-secondary"
          >
            book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
