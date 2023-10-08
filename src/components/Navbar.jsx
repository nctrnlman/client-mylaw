import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <Link to="/" className="normal-case cursor-pointer">
            <img
              src={logo}
              alt="MyLaw Logo"
              className="w-24 h24 object-contain object-center"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="" to="/about-us">
                About
              </Link>
            </li>
            <li>
              <Link className="" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="" to="/client">
                Our Clients
              </Link>
            </li>
            <li>
              <Link className="" to="/article">
                News & Insight
              </Link>
            </li>
            <li>
              <Link className="" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
