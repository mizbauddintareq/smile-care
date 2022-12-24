import MakeAppointment from "../../Appointment/MakeAppointment/MakeAppointment";
import About from "../About/About";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <About />
      <MakeAppointment />
    </div>
  );
};

export default Home;
