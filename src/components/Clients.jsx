import { Link } from "react-router-dom";
import hokben from "../assets/clients-logo/hokben.png";
import perikanan from "../assets/clients-logo/perikanan-indonesia.png";
import pln from "../assets/clients-logo/pln.png";
import ptKitalulus from "../assets/clients-logo/pt-kitalulus.png";
import ptCscesCina from "../assets/clients-logo/pt-csces-cina.png";
import gowork from "../assets/clients-logo/gowork.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Clients = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="py-28 px-2 max-w-7xl mx-auto"
    >
      <div className="mb-20 flex justify-center items-center">
        <h2 className="text-primary px-4 py-2 text-4xl md:text-5xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-secondary after:scale-x-0 hover:after:scale-x-100 after:transition">
          Our Clients
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 grid-rows-1 items-center justify-center">
        <img src={ptKitalulus} alt="" className="w-1/2 h-auto mx-auto" />
        <img src={ptCscesCina} alt="" className="w-1/2 h-auto mx-auto" />
        <img src={gowork} alt="" className="w-1/2 h-auto mx-auto" />
        <img src={hokben} alt="" className="w-1/2 h-auto mx-auto" />
        <div className="flex flex-col justify-center items-center">
          <Link
            to="/client"
            className="btn btn-circle btn-outline btn-primary mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <span className="text-sm text-primary">See All</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Clients;
