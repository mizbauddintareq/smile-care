import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="hero banner-bg my-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <img
            src={chair}
            className="w-full lg:max-w-md rounded-lg shadow-2xl"
            alt="banner-img"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="rounded-lg py-4 shadow-2xl mr-0 lg:mr-16">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
