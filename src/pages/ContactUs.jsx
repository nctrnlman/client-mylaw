import Navbar from "../components/Navbar";
import {
  FaHandsHelping,
  FaGavel,
  FaMoneyBillWave,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import woman from "../assets/woman_contact.png";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="flex-1 p-4 md:pb-7  mx-auto md:mx-0">
            <div>
              <h2 className="text-3xl md:text-5xl  font-bold mb-2 md:mb-4 text-primary">
                Get in Touch
              </h2>
              <p className="text-base md:text-lg  text-black mb-7">
                Feel free to contact us and discover more about the services we
                offer. Our team is ready to assist you.
              </p>
            </div>
            <div className="rounded-lg shadow-2xl bg-white mt-4 p-4 md:max-w-[70%] ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-white text-base  "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Company Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="input input-bordered w-full bg-white text-base  "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered w-full bg-white text-base  "
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="input input-bordered w-full bg-white text-base  "
                  />
                </div>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-black">Description</span>
                </label>
                <textarea
                  placeholder="Briefly describe your inquiry..."
                  className="textarea textarea-bordered w-full bg-white text-base  "
                ></textarea>
              </div>
              <div className="form-control">
                <button className="btn bg-primary text-white w-full text-base  ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <img
            src={woman}
            alt="Get in Touch"
            className="hidden md:block md:w-[40%] h-auto object-cover align-self-start"
          />
        </div>

        <div className="mx-auto w-full gap-4 py-10 p-4">
          <div className="gap-4 text-white p-4 flex flex-col-reverse md:flex-row shadow-lg w-full  mx-auto">
            <div className="w-full md:w-1/2 ">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63460.883184791724!2d106.78955910006704!3d-6.223428838898116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b05d4e2f09%3A0xa5efcf4cf829b0a!2sMARIHAT%20RESIDENCE!5e0!3m2!1sen!2sid!4v1693642493007!5m2!1sen!2sid"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-4 text-black p-2 rounded-lg">
              <h2 className="text-2xl md:text-4xl font-semibold mb-1">
                Contact Information
              </h2>
              <p className="text-lg">
                Feel free to contact us using the information below:
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <p className="flex items-center text-base">
                  <FaInstagram className="h-6 w-6 mr-2 text-primary" />
                  <a href="https://www.instagram.com/mylaw.id/">mylaw.id</a>
                </p>
                <p className="flex items-center text-base">
                  <FaLinkedin className="h-6 w-6 mr-2 text-primary" />
                  <a href="https://www.linkedin.com/company/mylaw-id/">
                    LinkedIn
                  </a>
                </p>
                <p className="flex items-center text-base">
                  <FaYoutube className="h-6 w-6 mr-2 text-primary" />
                  <a href="https://www.youtube.com/user/officialmylawid">
                    Official MyLaw ID
                  </a>
                </p>
                <p className="flex items-center text-base">
                  <FaPhone className="h-6 w-6 mr-2 text-primary" />
                  0812-1111-0564
                </p>
                <p className="flex items-center text-base">
                  <FaEnvelope className="h-6 w-6 mr-2 text-primary" />
                  mylawid2022@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-20 gap-5 text-black">
          <div className="md:w-1/2 lg:w-1/2 p-4 pb-5 text-center">
            <h2 className="text-3xl md:text-4xl  font-bold text-primary">
              Unlocking Solutions for You
            </h2>
            <p className="pt-4 text-base md:text-lg ">
              With our wealth of experience and unwavering commitment, we are
              dedicated to delivering the optimal solutions tailored just for
              you.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/3 p-4 text-center flex flex-col gap-4">
              <FaHandsHelping size={64} className="mb-2 mx-auto text-primary" />
              <h2 className="text-xl md:text-2xl  font-semibold text-black">
                Reach Out to Us
              </h2>
              <p>
                Take the first step with a free case review. Engage in our chat,
                or simply fill out our form.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center flex flex-col gap-4">
              <FaGavel size={64} className="mb-2 mx-auto text-primary" />
              <h2 className="text-xl md:text-2xl  font-semibold text-black">
                Crafting Your Legal Strategy
              </h2>
              <p>
                While you focus on your family, we diligently gather evidence
                and build a robust case on your behalf.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center flex flex-col gap-4">
              <FaMoneyBillWave
                size={64}
                className="mb-2 mx-auto text-primary"
              />
              <h2 className="text-xl md:text-2xl font-semibold">
                Compensation Awaits
              </h2>
              <p>
                Join the countless families we’ve assisted in securing billions
                in settlements and verdicts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
