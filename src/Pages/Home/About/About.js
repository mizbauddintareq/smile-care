import treatment from "../../../assets/images/treatment.png";
const About = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={treatment}
            className="rounded-lg shadow-2xl lg:max-w-sm "
            alt="banner-img"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            Oral hygiene is the practice of keeping one's mouth clean and free
            of disease and other problems by regular brushing of the teeth and
            cleaning between the teeth. It is important that oral hygiene be
            carried out on a regular basis to enable prevention of dental
            disease and bad breath.
          </p>
          <button className="btn text-white font-bold btn-primary bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
