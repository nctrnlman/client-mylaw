import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
