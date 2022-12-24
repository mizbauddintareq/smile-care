import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton";

const MakeAppointment = () => {
  return (
    <div className="hero appointment-bg mt-20 lg:mt-40">
      <div className="hero">
        <div className="hero-content p-4 lg:p-0 flex-col lg:flex-row">
          <img
            src={doctor}
            className="lg:w-1/2 -mt-36 hidden md:block"
            alt="make-appointment"
          />

          <div>
            <h4 className="text-xl font-bold text-secondary">Appointment</h4>
            <h1 className="text-5xl font-bold text-white">
              Make an appointment
            </h1>
            <p className="py-6 text-white">
              It is recommended you do not have anything to eat or drink (except
              for water) at least 5 hours before your scheduled appointment.
              This will prevent food debris from lodging in your teeth, which
              can irritate you during a cleaning and give your dentist a little
              extra work to do.
            </p>
            <PrimaryButton name={"appointment"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
