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
      <div className="container mx-auto md:px-20">
        <div className="flex flex-col md:flex-row mb-8 md:mb-16 p-4 md:p-20">
          <div className="w-full md:w-1/2 relative flex justify-start p-4">
            <div className="p-4 md:p-1">
              <h2 className="text-4xl md:text-6xl font-semibold mb-2 md:mb-4 text-primary">
                Get in Touch
              </h2>
              <p className="text-lg md:text-base text-black">
                Feel free to contact us and discover more about the services we
                offer. Our team is ready to assist you.
              </p>
            </div>
            <img
              src={woman}
              alt="Get in Touch"
              className="w-[60%] h-auto object-cover mt-4 md:mt-0 ml-0 md:ml-4"
              style={{
                "@media (min-width: 780px) and (max-width: 1059px)": {
                  display: "none",
                },
              }}
            />
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-6">
            <div className="rounded-lg shadow-2xl bg-white">
              <div className="w-full p-4 md:p-6 text-black">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-black">
                    Send Us a Message and Learn More About Our Services
                  </h2>
                  <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                    <div className="md:w-1/2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-black">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="input input-bordered w-full bg-white"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-black">
                            Company Name
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="input input-bordered w-full bg-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                    <div className="md:w-1/2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-black">
                            Phone Number
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="input input-bordered w-full bg-white"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-black">
                            Email Address
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Email Address"
                          className="input input-bordered w-full bg-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black">Description</span>
                    </label>
                    <textarea
                      placeholder="Description"
                      className="textarea textarea-bordered w-full bg-white"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-primary text-white w-full">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex flex-col-reverse md:flex-row gap-4 p-4 md:p-20">
          <div className="w-full md:w-1/2">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63460.883184791724!2d106.78955910006704!3d-6.223428838898116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b05d4e2f09%3A0xa5efcf4cf829b0a!2sMARIHAT%20RESIDENCE!5e0!3m2!1sen!2sid!4v1693642493007!5m2!1sen!2sid"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="gap-4 text-white p-4 shadow-lg w-full md:w-1/2 mx-auto">
            <div className="space-y-4 text-black p-2 rounded-lg">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="text-lg md:text-base">
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
            <h2 className="text-5xl font-semibold text-primary">
              How We Can Help
            </h2>
            <p className="pt-4 text-xl">
              Dengan pengalaman dan komitmen kami, kami dapat memberikan solusi
              terbaik untuk Anda.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/3 p-4 text-center flex flex-col gap-4">
              <FaHandsHelping
                size={64}
                className="mb-2 mx-auto text-secondary"
              />
              <h2 className="text-2xl font-semibold text-primary ">
                Contact Us
              </h2>
              <p className="text-lg">
                For a free case review, call (888) 568-5061, use our chat, or
                fill out our form.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center flex flex-col gap-4">
              <FaGavel size={64} className="mb-2 mx-auto text-secondary" />
              <h2 className="text-2xl font-semibold text-primary">
                We Build Your Case
              </h2>
              <p className="text-lg">
                We gather evidence while you focus on caring for your family.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center flex flex-col gap-4">
              <FaMoneyBillWave
                size={64}
                className="mb-2 mx-auto text-secondary"
              />
              <h2 className="text-2xl font-semibold text-primary">
                Get Compensation
              </h2>
              <p className="text-lg">
                We’ve helped families receive billions in settlements and
                verdicts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
