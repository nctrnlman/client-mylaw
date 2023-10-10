import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="normal-case cursor-pointer">
          <img
            src={logo}
            alt="MyLaw Logo"
            className="w-24 h24 object-contain object-center"
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
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
      <div className="navbar-end lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm -translate-x-[75%] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                className="text-gray-800 hover:font-semibold transition duration-300 ease-in-out"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-800 hover:font-semibold transition duration-300 ease-in-out"
                to="/about-us"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-800 hover:font-semibold transition duration-300 ease-in-out"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:font-semibold transition duration-300 ease-in-out"
                to="/client"
              >
                Our Clients
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:font-semibold transition duration-300 ease-in-out"
                to="/article"
              >
                News & Insight
              </Link>
            </li>

            <li className="mx-2 text-gray-500">|</li>

            <li>
              <Link
                className="text-gray-800 hover:font-semibold transition duration-300 ease-in-out"
                to="/contact-us"
              >
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
