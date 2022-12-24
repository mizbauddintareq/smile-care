import PrimaryButton from "../../../components/PrimaryButton";

const ContactUs = () => {
  return (
    <section className="mt-20 appointment-bg py-16">
      <div className="lg:w-7/12 w-11/12 mx-auto">
        <div className="text-center py-10">
          <p className="text-xl text-secondary font-semibold">Contact Us</p>
          <h1 className="text-4xl text-white">Stay connected with us</h1>
        </div>
        <div className="lg:w-7/12 w-full mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input my-4 w-full"
          />
          <textarea
            className="textarea w-full h-32"
            placeholder="Your Message"
          ></textarea>
          <div className="text-center my-6">
            <PrimaryButton name={"submit"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
