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
      " Comprehensive support for your business in Indonesia, including incorporation, corporate secretary matters, business compliance (annual obligation, etc), intellectual property, manpower, taxes, and more.",
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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    centerPadding: "130px",
    cssEase: "ease-out",
    arrows: false,
  };

  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="hero-content text-center text-neutral-content absolute top-40"
      >
        <div className="flex">
          <h2 className="mb-16 text-4xl md:text-5xl font-bold mx-auto">
            Our Expertise
          </h2>
        </div>
      </motion.div>
      <div>
        <Slider {...settings} className="w-screen relative top-40 md:top-72">
          {servicesData.map((service) => (
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="card min-w-[260px] w-full max-w-[330px] h-[350px] bg-gradient-to-br from-[#005289] to-[#092a40]"
              key={service.name}
            >
              <figure className="w-min p-5 rounded-full mx-auto bg-primary -mt-10 text-secondary">
                <ServiceLogo logo={service.logo} />
              </figure>
              <div className="card-body -mt-6">
                <h2 className="card-title justify-center md:text-lg text-base text-center min-h-[5rem] text-secondary">
                  {service.name}
                </h2>
                <p className="text-sm md:text-base text-gray-300 text-center">
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
