import { format } from "date-fns";
import { useEffect, useState } from "react";
import BookingModal from "../../../components/BookingModal";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="my-16">
      <h3 className="text-xl font-bold text-secondary text-center">
        Available Services on {format(selectedDate, "PP")}
      </h3>
      <div className="grid mt-10 dark:p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
