import aboutUsImg from "../assets/img-about_us.png";

const AboutUs = () => {
  return (
    <div
      className="max-w-7xl px-2 py-16 grid grid-cols-2 items-center gap-5 mx-auto"
      id="aboutUs"
    >
      <div>
        <h2 className="text-4xl font-bold mb-5">About Us</h2>
        <p className="mb-4">
          At Mylaw, we are your perfect and most trusted legal consultants,
          dedicated to assisting all your legal needs. In just one year since
          our inception, we've achieved an impressive track record—settling over
          99.8% of cases and ensuring 100% client satisfaction, with a total
          contract value exceeding seven hundred sixty-five million rupiah. Our
          success stories span non-litigation and litigation procedures.
        </p>
        <p className="mb-10">
          With significant experiences in corporate, commercial, civil law, and
          debt recovery, we are known for safeguarding the rights and interests of landlords and tenants, businesses of all sizes, private foundations,
          individuals, and families menjadi we are known for safeguarding the rights and interests of landlords and tenants, entreprises of all sizes,
          private foundations, individuals, and families.
        </p>
        <a
          href=""
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
        </a>
      </div>
      <img src={aboutUsImg} alt="" className="w-1/2 justify-self-center" />
    </div>
  );
};

export default AboutUs;
