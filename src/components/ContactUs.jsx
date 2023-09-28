import woman from "../assets/woman_contact.png";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row pt-4 md:pt-20 items-center justify-center">
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <h4 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4">
          Ready to make a move? Contact us now and discover how we can guide you
          through legal strategies and safeguard your interests.
        </h4>
        <a href="/contact-us">
          <button className="px-4 md:px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out">
            Get in Touch
          </button>
        </a>
      </div>

      <div className="w-full md:w-1/2 pl-0 md:pl-8 flex justify-center md:justify-end">
        <img src={woman} alt="Woman" className="w-48 md:w-64 h-auto" />
      </div>
    </div>
  );
};

export default ContactUs;
