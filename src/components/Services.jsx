import Slider from "react-slick";
import ServiceLogo from "./ServiceLogo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const servicesData = [
  {
    name: "Corporate Legal",
    description:
      "Comprehensive support for your business in Indonesia, including incorporation, corporate secretary matters, business compliance (annual obligation, etc), intellectual property, manpower, taxes, and more.",
    logo: "corporate",
  },
  {
    name: "Permits & Licensing",
    description:
      "Streamlining your business journey by offering expert assistance with various licenses and permits.",
    logo: "license",
  },
  {
    name: "Commercial Law",
    description:
      "Handling a spectrum of commercial disputes and Merger and Acquisition transactions, including complex state-owned enterprise takeovers.",
    logo: "commercial",
  },
  {
    name: "Civil & Criminal Litigation",
    description:
      "We prioritize efficient and cost-effective legal solutions. Our experienced team is prepared to handle court cases when necessary.",
    logo: "civil",
  },
  {
    name: "Restructuring, Turnaround, and Insolvency",
    description:
      "We are your trusted partner for efficient commercial debt collection. You only pay when we succeed, preserving your customer relationships.",
    logo: "turnaround",
  },
  {
    name: "Legal Education",
    description:
      "Elevate your legal knowledge with our specialized Legal Education Services team. Gain the insights you need to make informed decisions and excel in your legal endeavors.",
    logo: "education",
  },
];

const Services = () => {
  const CustomArrow = ({ direction, onClick }) => {
    const arrowClass = direction === "prev" ? "left-0" : "right-0";
    return (
      <div
        className={`absolute top-1/2 ${arrowClass} transform -translate-y-1/2 text-white cursor-pointer z-10 p-4`}
        onClick={onClick}
      >
        {direction === "prev" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.293 16.707a1 1 0 0 0 0-1.414L7.707 11H16a1 1 0 1 0 0-2H7.707l4.586-4.586a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.707 16.707a1 1 0 0 0 1.414 0L12.293 12H4a1 1 0 1 0 0 2h8.293l-3.586 3.586a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414L12.293 10H4a1 1 0 1 0 0 2h8.293l-3.586 3.586a1 1 0 0 0 1.414 1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    centerPadding: "130px",
    cssEase: "ease-out",
    arrows: true, // Enable arrows
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)",
      }}
    >
      <div className="absolute inset-0 bg-slate-800 bg-opacity-60"></div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center text-neutral-content absolute top-20 w-full"
      >
        <div className="flex">
          <h2 className="mb-16 text-4xl md:text-5xl font-bold text-center text-white">
            Our Expertise
          </h2>
        </div>
      </motion.div>
      <div className="relative">
        <Slider
          {...settings}
          className="w-screen text-center relative top-40 md:top-64 overflow-visible"
        >
          {servicesData.map((service) => (
            <motion.div
              variants={fadeIn("up", 0.3)} // Animasi masuk
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              key={service.name}
              className="card relative w-full min-w-[260px] max-w-[330px] h-[350px] bg-gradient-to-br from-[#005289] to-[#092a40] overflow-visible"
            >
              {/* Bagian Logo */}
              <figure className="pt-10  text-secondary">
                <ServiceLogo logo={service.logo} />
              </figure>

              {/* Bagian Konten */}
              <div className="card-body">
                <h2 className="card-title  text-center text-base md:text-lg text-secondary justify-center">
                  {service.name}
                </h2>
                <p className="text-center text-sm md:text-base text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
