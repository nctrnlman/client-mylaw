import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import mylawLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex-row  p-10  text-white bg-[#005289] ">
      <div className="footer pb-4 max-w-7xl mx-auto">
        <div>
          <img
            src={mylawLogo}
            alt="MyLaw Logo"
            className="md:w-[85px] w-[80px] scale-150"
          />
          <p className="">Providing Legal Support</p>
        </div>

        <nav className="text-white">
          {/* <header className="text-lg font-semibold ">Page</header> */}
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/about-us" className="link link-hover">
            About
          </Link>
          <Link to="/services" className="link link-hover">
            Services
          </Link>
          <Link to="/client" className="link link-hover">
            Clients
          </Link>
          <Link to="/article" className="link link-hover">
            News & Insight
          </Link>
          <Link to="/contact-us" className="link link-hover">
            Contact Us
          </Link>
        </nav>

        <div>
          {/* <span className="text-lg font-semibold">Our Location</span> */}
          <p className="">
            {/* Grand Slipi Tower Lantai 5 Unit i.1 */} Jalan Pengadegan Utara
            II No. 30
            <br />
            Pancoran, Jakarta Selatan.
            <br />
            Indonesia
            <br />
            <br />
          </p>
        </div>

        <div>
          <p className="">Tel. +62 812 1111 0564, +62 878 6588 7051</p>
          <p className="">Email. contact@mylaw.id, career@mylaw.id</p>
        </div>

        <div>
          {/* <span className="text-lg font-semibold">Social</span> */}
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/mylaw-id-039818270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="fill-current " />
            </a>
            <a
              href="https://instagram.com/mylaw.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} className="fill-current " />
            </a>
            <a href="mailto:contact@mylaw.id">
              <FaEnvelope size={24} className="fill-current " />
            </a>
            <a
              href="https://www.youtube.com/@officialmylawid5841"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} className="fill-current " />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="copyright text-center text-xs">
          &copy; 2023 Mylaw.id. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
