import ServiceLogo from "./ServiceLogo";

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
      "Elevate your legal knowledge with our specialized Legal Education Services at [Law Firm Name]. Gain the insights you need to make informed decisions and excel in your legal endeavors.",
    logo: "education",
  },
];

const Services = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-7xl mx-auto py-2 flex flex-col justify-center items-center">
          <h2 className="mb-16 text-5xl font-bold">Our Expertise</h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            {servicesData.map((service) => (
              <div className="card w-full glass mb-8" key={service.name}>
                <figure className="w-min p-5 rounded-full mx-auto bg-primary -mt-10 text-secondary">
                  <ServiceLogo logo={service.logo} />
                </figure>
                <div className="card-body -mt-6">
                  <h2 className="card-title justify-center min-h-[5rem]">
                    {service.name}
                  </h2>
                  <p className="text-sm text-gray-300 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
