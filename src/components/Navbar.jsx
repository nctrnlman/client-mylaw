import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="navbar max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/" className="normal-case cursor-pointer">
            <img
              src={logo}
              alt="MyLaw Logo"
              className="w-24 h-24 object-contain object-center"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex space-x-7 items-center">
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
