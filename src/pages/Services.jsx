import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";

const corporateServices = [
  "Company establishment",
  "Shareholder agreement",
  "Corporate dead",
  "Director's resolution",
  "Commissioner's resolution",
  "Shareholder resolution",
  "Strategic alliance",
  "Partnership",
  "Corporate action",
  "Corporate restructuring",
  "Licensing (new and renewall)",
  "Mandatory investment report",
  "Director change",
  "Commissioner change",
  "Legal due dilligence",
  "Legal research",
  "Annual general meeting shareholders",
  "Extraordinary general meeting shareholder",
  "Legal representative",
  "Power of attornerys",
  "Capital increas",
  "Capital reduction",
  "Amendment corporate deed",
  "Shares transfer",
  "Legal documents summary",
  "Legal documents management",
  "Legal reminder",
  "Legal monitoring",
  "Legal consultation",
  "Legal opinion",
  "Legal advices",
  "Legal assistance",
  "Law & regulation searching",
  "Legal drafting",
  "Legal briefing",
  "Legal workshop/seminar",
  "Corporate secretarial",
  "Employment contract",
  "Company regulation",
  "Collective employment contract",
  "Emplovment dispute",
  "Contract drafting",
  "Contract review",
  "Contract revision",
  "Addendum contract",
  "Preliminary agreement",
  "Memoranum of understanding",
  "Letter of intent",
  "Cooperation contract",
  "Lease contract",
  "Contract/form template",
  "Memorandum of meetina",
  "Termination of contract",
  "Legal translation",
  "Tort",
  "Breach of contract/default",
  "Legal correspondences",
  "Securitization",
  "Security execution",
  "Dispute settlement",
  "Legal negotiation",
  "Legal representative",
  "Amendment contract",
];

const permitsAndLicensingServices = [
  "Licensing",
  "Management of Environmental Permits",
  "Industrial Business Permits",
  "Indonesian National Standard (SNI)",
  "Import Approvals",
  "Micro Small Business Permits (IUMK)",
  "ID Number (NIK) (For Customs Affairs)",
  "business identification number (NIB) (separate)",
  "Agency NPWP",
  "E-commerce license",
  "National Agency of Drug and Food Control (BPOM)",
  "Broadcasting License",
  "Foundation Operational License",
  "Home Industrv Food Production Certificate (PIRT)",
  "Marketina authorization",
  "And other permits",
];

const commersialServices = [
  "Joint Venture",
  "Acquisition",
  "Merger",
  "Consolidation",
  "Split Off",
  "Sale and Purchase Contract",
  "Purchase Order",
  "commercial/business contract",
];

const civilAndCriminalLigitimationServices = [
  "Warning letter",
  "Debt restructuring",
  "Pavment monitorina",
  "Civil Lawsuit",
  "Criminal report",
  "Suspension of pavment,",
  "Criminal/police report, ",
  "Civil Action,",
  "Postponement of Debt Pavment Obligations (PKU)",
  "Other Legal Remedies Against Court Decisions",
];

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-[calc(100vh-7rem)] grid grid-cols-2 max-w-7xl mx-auto items-center gap-10">
        <div>
          <h1
            className="relative mb-7 text-primary text-5xl font-bold before:content-[''] before:block before:absolute before:-bottom-4 before:w-1/2 before:border-t-2
					 before:border-primary"
          >
            Mylaw's Services
          </h1>
          <p className="my-10 text-lg">
            At Mylaw, we specialize in a wide range of practice areas, ensuring
            that we can address your legal concerns effectively. Whether you're
            an individual, a small business, or a large corporation, our team is
            ready to assist you in the following areas:
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
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </section>

      <div className="py-28 px-2 max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center items-center">
          <h2 className="px-4 py-2 text-4xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
            Our Corporate Service Includes
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-center">
          {corporateServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </div>
      </div>

      <div className="py-28 px-2 max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center items-center">
          <h2 className="px-4 py-2 text-4xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
            Our Permits & Licensing Service Includes
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-center">
          {permitsAndLicensingServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </div>
      </div>

      <div className="py-28 px-2 max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center items-center">
          <h2 className="px-4 py-2 text-4xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
            Our Commercial Service Includes
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-center">
          {commersialServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </div>
      </div>

      <div className="py-28 px-2 max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center items-center">
          <h2 className="px-4 py-2 text-4xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
            Our Commercial Service Includes
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-center">
          {civilAndCriminalLigitimationServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </div>

        <ContactUs />
      </div>
    </>
  );
};

export default Services;
