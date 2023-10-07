import woman from "../assets/woman_contact.png";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row pt-4 md:pt-20 items-center justify-center">
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <div className="mb-3 md:mb-4">
          <h4 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-primary">
            Ready to make a move?
          </h4>
          <p className=" md:text-xl">
            Contact us now and discover how we can guide you through legal
            strategies and safeguard your interests.
          </p>
        </div>

        {/* <a href="/contact-us">
          <button className="px-4 md:px-6 py-2 bg-secondary text-white rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out">
            Get in Touch
          </button>
        </a> */}
        <a
          href="/contact-us"
          className="btn btn-outline btn-secondary hover:pr-10 group transition-all rounded-none"
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

      <div className="w-full md:w-1/2 pl-0 md:pl-8 flex justify-end md:justify-end">
        <img src={woman} alt="Woman" className="w-48 md:w-64 h-auto" />
      </div>
    </div>
  );
};

export default ContactUs;
