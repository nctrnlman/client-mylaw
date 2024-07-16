import aboutUsImg from "../assets/img-about_us.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    innerWidth: 100,
  };

  return (
    // <motion.div
    //   variants={fadeIn("right", 0.3)}
    //   initial="hidden"
    //   whileInView={"show"}
    //   viewport={{ once: true, amount: 0.3 }}
    //   className="max-w-7xl py-16  items-center gap-10 mx-auto px-5"
    //   id="aboutUs"
    // >
    //   <div className="text-center">
    //     <h2 className="text-4xl md:text-5xl font-bold mb-5">About Us</h2>
    //     <p className="md:text-lg mb-4">
    //       At Mylaw, we are your perfect and most trusted legal consultants,
    //       dedicated to assisting all your legal needs. In just one year since
    //       our inception, we have achieved an impressive track record—settling
    //       over 99.8% of cases and ensuring 100% client satisfaction, with a
    //       total contract value exceeding seven hundred sixty-five million
    //       rupiah. Our success stories span non-litigation and litigation
    //       procedures.
    //     </p>
    //     <p className="md:text-lg mb-10">
    //       With significant experiences in corporate, commercial, civil law, and
    //       debt recovery, we are known for safeguarding the rights and interests
    //       of landlords and tenants, businesses of all sizes, private
    //       foundations, individuals, and families menjadi we are known for
    //       safeguarding the rights and interests of landlords and tenants,
    //       entreprises of all sizes, private foundations, individuals, and
    //       families.
    //     </p>
    //     <a
    //       href="/about-us"
    //       className="btn btn-outline btn-secondary hover:pr-10 group transition-all rounded-none"
    //     >
    //       Read More
    //       <span className="group-hover:translate-x-4 transition-all">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </span>
    //     </a>
    //   </div>
    //   <Slider {...settings}>
    //     <div>
    //       <img
    //         src={aboutUsImg}
    //         alt=""
    //         className="w-full h-[35rem] object-cover object-center"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    //         alt=""
    //         className="w-full h-[35rem] object-cover object-center"
    //       />
    //     </div>
    //   </Slider>
    // </motion.div>
    <div
      className="hero min-h-[calc(91vh-140px)] "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1454923634634-bd1614719a7b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-80 "></div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="hero-content text-center text-neutral-focus"
      >
        <div className="text-center p-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            About Us
          </h2>
          <p className="md:text-lg mb-8">
            At Mylaw, we are your perfect and most trusted legal consultants,
            dedicated to assisting all your legal needs. In just one year since
            our inception, we have achieved an impressive track record—settling
            over 99.8% of cases and ensuring 100% client satisfaction, with a
            total contract value exceeding seven hundred sixty-five million
            rupiah. Our success stories span non-litigation and litigation
            procedures.
          </p>
          <p className="md:text-lg mb-10">
            With significant experiences in corporate, commercial, civil law,
            and debt recovery, we are known for safeguarding the rights and
            interests of landlords and tenants, businesses of all sizes, private
            foundations, individuals, and families menjadi we are known for
            safeguarding the rights and interests of landlords and tenants,
            entreprises of all sizes, private foundations, individuals, and
            families.
          </p>

          <Link
            to="/about-us"
            className="btn btn-outline btn-secondary hover:pr-10 group transition-all rounded-none"
          >
            Read More
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
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
