import { FaGavel, FaBalanceScale } from "react-icons/fa";
import Navbar from "../components/Navbar";
import aboutHero from "../assets/about-hero.jpg";
import bgCareer from "../assets/img1.jpg";
import bgWho from "../assets/logo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  return (
    <>
      <Navbar />

      <div
        className="hero min-h-screen relative"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="hero-overlay bg-secondary opacity-40"></div>
        <div className="hero-content text-neutral-focus">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-left"
            >
              <h1 className="relative mb-7 text-primary text-4xl lg:text-7xl font-bold before:content-[''] before:block before:absolute before:-bottom-4 before:w-1/2 before:border-t-2 before:border-primary">
                About Mylaw
              </h1>
              <p className="mt-8 mb-5 md:text-lg text-white">
                Welcome to Mylaw, where legal expertise meets unwavering
                commitment. At Mylaw, we are more than just a law firm. we are
                your trusted partners in navigating the complexities of the
                legal landscape. Our dedicated team is driven by a shared vision
                and mission to provide exceptional legal services tailored to
                your unique needs.
              </p>

              <a
                href="/contact-us"
                className="btn text-white  btn-primary hover:pr-10 group transition-all rounded-none"
              >
                Get in Touch
                <span className="group-hover:translate-x-4 transition-all">
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
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-5 md:pt-10 lg:pt-20 flex flex-col-reverse lg:flex-row px-5">
        <div className="lg:w-[70%] ">
          <h1 className="text-4xl md:text-5xl font-bold text-primary pb-4 lg:pb-6">
            Who Are We ?
          </h1>
          <p className=" md:text-lg mb-4 text-justify">
            At Mylaw, we pride ourselves on being your go-to legal consultants,
            ready to cater to all your legal needs. Since the first year of our
            inception, we've achieved an astounding success rate of over 99.8%
            in settling cases, leaving our clients with 100% satisfaction. Our
            combined professional and success fees have exceeded seven hundred
            sixty-five million rupiah in our first of incorporation.
          </p>
          <p className=" md:text-lg mb-4 text-justify">
            Our team at Mylaw is composed of lawyers who have been deeply
            immersed in the world of corporate and commercial law, debt
            recovery, as well as civil and criminal litigation since 2014. In
            our first of incorporation, we've earned the trust of over 50
            clients who have entrusted us with the responsibility of arbitrating
            and mediating their cases, leading to consistently favorable
            outcomes.
          </p>
          <p className=" md:text-lg mb-4 text-justify">
            Our lawyers have honed their legal skills across Indonesia and are
            recognized by esteemed institutions such as the Indonesian Advocates
            Association (Perhimpunan Advokat Indonesia - PERADI) and the
            Indonesian Lawyers Association (Asosiasi Advokat Indonesia - AAI).
          </p>
          <p className=" md:text-lg mb-4 text-justify">
            With our extensive expertise in corporate, commercial, civil law,
            and debt recovery, Mylaw is the preferred choice for landlords,
            tenants, businesses of all sizes, private foundations, individuals,
            and families seeking to safeguard their rights and interests. We're
            here to stand by your side and provide the legal support you need.
          </p>
        </div>

        <div className="w-3/4 mx-auto md:w-auto md:h-auto md:m-auto mt-3 md:mt-0">
          <img
            src={bgWho}
            alt=""
            className="w-full h-full object-cover md:transform md:scale-110"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 mb-20 md:mt-40 md:mb-40 px-5 md:py-15 flex flex-col gap-10">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="pb-20 md:pb-40 md:flex md:items-center flex flex-col-reverse lg:flex-row"
        >
          <div className="md:flex-1 mb-6 md:mb-0  p-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-center md:text-left text-primary">
              Our Vision
            </h2>
            <p className="md:text-lg text-justify">
              To become a highly dedicated, professional, and integrated legal
              service with the capacity and capability in carrying out
              professional duties by consistently delivering highly skilled,
              ethical, and committed legal services to our clients.
            </p>
          </div>
          <div className="md:flex-1 py-5 flex items-center justify-center ">
            <FaGavel className="text-[100px] md:text-[250px] text-secondary bg-primary rounded-full md:p-8 p-4" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="md:flex md:items-center"
        >
          <div className="md:flex-1 flex items-center justify-center mb-6 md:mb-0">
            <FaBalanceScale className="text-[100px] md:text-[250px] text-secondary bg-primary rounded-full md:p-8 p-4" />
          </div>
          <div className="md:flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-center md:text-left text-primary">
              Our Mission
            </h2>
            <p className="md:text-lg  mb-4 text-justify">
              Providing good, friendly, and pleasant services to maintain a good
              relationship with clients by effectively staying connected and
              also to give satisfaction to our clients.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative w-screen  text-black py-10 mt-10">
        {/* Gambar sebagai latar belakang */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgCareer})`,
          }}
        ></div>

        {/* Lapisan untuk menggelapkan gambar dengan warna tertentu */}
        <div
          className="absolute inset-0 bg-primary opacity-70"
          style={{ backgroundColor: "#b69025" }}
        ></div>

        {/* Konten Tengah */}
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center py-5 h-52 relative z-10 text-primary">
          <h3 className="text-3xl md:text-5xl font-bold mb-5 text-center">
            Want to be a part of the team?
          </h3>
          <p className="text-xl md:text-2xl lg:text-3xl text-center">
            career@mylaw.id
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
