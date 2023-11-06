import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import mylawLogo from "../assets/footer-logo.png";

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
          <a href="/" className="link link-hover">
            Home
          </a>
          <a href="/about-us" className="link link-hover">
            About
          </a>
          <a href="/services" className="link link-hover ">
            Services
          </a>
          <a href="/client" className="link link-hover ">
            Clients
          </a>
          <a href="/article" className="link link-hover">
            News & Insight
          </a>
          <a href="/contact-us" className="link link-hover ">
            Contact Us
          </a>
        </nav>

        <div>
          {/* <span className="text-lg font-semibold">Our Location</span> */}
          <p className="">
            Jalan Pengadegan Barat IV No.12A <br />
            Pancoran, Jakarta Selatan <br />
            Indonesia
          </p>
        </div>

        <div>
          <p className="">Tel. +62 812 1111 0564, +62 878 6588 7051</p>
          <p className="">Email. mylaw@gmail.com</p>
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
            <a href="mailto:mylawid2022@gmail.com">
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
