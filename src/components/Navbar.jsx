import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="flex-1">
        <a className="normal-case cursor-pointer">
          <img
            src={logo}
            alt="MyLaw Logo"
            className="w-24 h24 object-contain object-center"
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Sevices</Link>
          </li>
          <li>
            <Link to="/client">Client</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
