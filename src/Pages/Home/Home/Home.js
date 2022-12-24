import MakeAppointment from "../../Appointment/MakeAppointment/MakeAppointment";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <About />
      <MakeAppointment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
