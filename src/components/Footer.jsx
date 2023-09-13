import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import mylawLogo from "../assets/mylaw_logo.png";

function Footer() {
  return (
    <footer className="flex-row  p-10  text-white bg-[#005289]">
      <div className="footer pb-4">
        <div>
          <img src={mylawLogo} alt="MyLaw Logo" width="80px" />
          <h1 className="footer-title text-lg ">Mylaw.id</h1>
          <p className="text-base">Providing Legal Support since 2022</p>
        </div>

        <div>
          <span className="footer-title text-lg ">Our Location</span>
          <p className="text-base">
            Jalan Pengadegan Barat IV No.12A <br />
            Pancoran, Jakarta Selatan
          </p>
        </div>

        <div>
          <span className="footer-title text-lg">Social</span>
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
