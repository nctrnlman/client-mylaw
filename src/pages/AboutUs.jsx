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
      {/* <div className="relative flex ">
        <div className="py-11 flex flex-col justify-center max-w-7xl mx-auto text-black z-10 px-8">
          <div className="text-3xl md:text-7xl font-bold mb-10  ">

            <span className="">Who Are </span>
            <span className="text-primary">We?</span>
          </div>
          <p className="text-lg  mb-4">
            At MyLaw, we pride ourselves on being your go-to legal consultants,
            ready to cater to all your legal needs. In just one year Since the
            first year of our incorporation, we've achieved an astounding
            success rate of over 99.8% in settling cases, leaving our clients
            with 100% satisfaction. Our combined professional and success fees
            have exceeded seven hundred sixty-five million rupiah, thanks to our
            expert handling of both non-litigation and litigation procedures.
          </p>
          <p className="text-lg  mb-4">
            Our team at MyLaw is composed of seasoned lawyers who have been
            deeply immersed in the world of corporate and commercial law, debt
            recovery, as well as civil and criminal litigation since 2014.
            Throughout our journey, we've earned the trust of over 120 clients
            who have entrusted us with the responsibility of arbitrating and
            mediating their cases, leading to consistently favorable outcomes.
          </p>
          <p className="text-lg  mb-4">
            Our lawyers have honed their legal skills across Indonesia and are
            recognized by esteemed institutions such as the Indonesian Advocates
            Association (Perhimpunan Advokat Indonesia - PERADI) and the
            Indonesian Lawyers Association (Asosiasi Advokat Indonesia - AAI).
          </p>
          <p className="text-lg  mb-4">
            With our extensive expertise in corporate, commercial, civil law,
            and debt recovery, MyLaw is the preferred choice for landlords,
            tenants, businesses of all sizes, private foundations, individuals,
            and families seeking to safeguard their rights and interests. We're
            here to stand by your side and provide the legal support you need.
          </p>
        </div>
        <div className="relative w-[2200px]">
          <div className="absolute inset-0 bg-primary opacity-60 w-[100%]"></div>
          <img
            src={aboutHero}
            alt="MyLaw.id Team"
            className="w-[100%] h-full object-cover"
          />
        </div>
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundColor: "##000000",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto text-center lg:text-left text-white z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-secondary">
            Discover Our Firm's Essence
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Explore the core of our organization, where a dedication to
            excellence and a visionary outlook define the essence of our firm.
          </p>
          <a
            href="/contact-us"
            className="btn  btn-secondary hover:pr-10 group transition-all rounded-none"
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
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto pt-5 md:pt-10 lg:pt-20 flex flex-col-reverse lg:flex-row px-5"
      >
        <div className="lg:w-[70%] ">
          <h1 className="text-4xl md:text-5xl font-bold text-primary pb-4 lg:pb-6">
            Who Are We ?
          </h1>
          <p className=" md:text-lg mb-4 text-justify">
            At Mylaw, we pride ourselves on being your go-to legal consultants,
            ready to cater to all your legal needs. Since the first year of our inception,
            we've achieved an astounding success rate of over 99.8%
            in settling cases, leaving our clients with 100% satisfaction. Our
            combined professional and success fees have exceeded seven hundred
            sixty-five million rupiah, thanks to our expert handling of both
            non-litigation and litigation procedures.
          </p>
          <p className=" md:text-lg mb-4 text-justify">
            Our team at Mylaw is composed of seasoned lawyers who have been
            deeply immersed in the world of corporate and commercial law, debt
            recovery, as well as civil and criminal litigation since 2014.
            Throughout our journey, we've earned the trust of over 120 clients
            who have entrusted us with the responsibility of arbitrating and
            mediating their cases, leading to consistently favorable outcomes.
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
      </motion.div>

      <div className="max-w-7xl mx-auto mt-10 mb-20 md:mt-40 md:mb-40 px-5 md:py-15 flex flex-col gap-10">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="pb-20 md:pb-40 md:flex md:items-center flex flex-col-reverse lg:flex-row"
        >
          <div className="md:flex-1 mb-6 md:mb-0 ">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-center md:text-left text-primary">
              Our Vision
            </h2>
            <p className="md:text-lg text-justify">
              With our extensive expertise in corporate, commercial, civil law,
              and debt recovery, Mylaw is the preferred choice for landlords,
              tenants, businesses of all sizes, private foundations,
              individuals, and families seeking to safeguard their rights and
              interests. We're here to stand by your side and provide the legal
              support you need.
            </p>
          </div>
          <div className="md:flex-1 py-5 flex items-center justify-center">
            <FaGavel className="text-[100px] md:text-[160px] text-secondary" />
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
            <FaBalanceScale className="text-[100px] md:text-[180px] text-secondary" />
          </div>
          <div className="md:flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-center md:text-left text-primary">
              Our Mission
            </h2>
            <p className="md:text-lg  mb-4 text-justify">
              To become a highly dedicated, professional, and integrated legal
              service with the capacity and capability in carrying out
              professional duties by consistently delivering highly skilled,
              ethical, and committed legal services to our clients.
            </p>
            <p className="text-lg ">
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
