import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-bg">
      <footer className="footer lg:justify-around justify-start al p-10">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <p>Kolatoli, Cox's Bazar, Bangladesh</p>
          <p>mizbauddintareq@gmail.com</p>
          <p>+880 1580541540</p>
        </div>
      </footer>
      <div className="text-center pb-6">
        <p>Copyright © 2022 - All right reserved by Mizba Uddin Tareq</p>
      </div>
    </section>
  );
};

export default Footer;
