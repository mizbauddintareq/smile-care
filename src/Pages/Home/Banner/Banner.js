import bannerImg from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero banner-bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <img
            src={bannerImg}
            className="w-full rounded-lg shadow-2xl"
            alt="banner-img"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">
            A better life starts with a beautiful smile
          </h1>
          <p className="py-6">
            What is a dental clinic? Strictly speaking, a dental clinic is a
            facility where dentists and dental staff provide care. But you'll
            often hear the term used to mean a place where dental services are
            available at a lower cost than at a private practice.
          </p>
          <PrimaryButton name={"Get Started"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
