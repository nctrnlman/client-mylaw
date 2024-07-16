import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

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
  "Employment dispute",
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
  "Memorandum of meeting",
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
  "Import/Export Permits",
  "Micro Small Business Permits (IUMK)",
  "ID Number (NIK) (For Customs Affairs)",
  "Business identification number (NIB) (separate)",
  "Taxpayer Identification Number (NPWP)",
  "E-commerce license",
  "National Agency of Drug and Food Control (BPOM)",
  "Broadcasting License",
  "Foundation Operational License",
  "Home Industry Food Production Certificate (PIRT)",
  "Marketing authorization",
  "And other permits",
];

const commersialServices = [
  "Joint venture",
  "Acquisition",
  "Merger",
  "Consolidation",
  "Split off",
  "Sale and purchase contract",
  "Purchase order",
  "Commercial/business contract",
];

const civilAndCriminalLigitimationServices = [
  "Debt restructuring",
  "Civil lawsuit",
  "Criminal report",
  "Criminal/police report",
  "Civil action",
  "Other legal remedies against court decisions",
];

const restructurinTurnaroundInsolvency = [
  "Warning letter",
  "Payment monitoring",
  "Suspension of payment",
  "Postponement of Debt Payment Obligations (PKPU)",
];

const Services = () => {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        }}
      >
        <div className="hero-overlay bg-secondary bg-opacity-50"></div>

        <div className="hero-content text-neutral-focus">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-left"
            >
              <h1
                className="relative mb-7 text-white text-4xl sm:text-7xl lg:text-7xl font-bold before:content-[''] before:block before:absolute before:-bottom-4 before:w-[60%] before:border-t-2
					 before:border-primary"
              >
                Mylaw&apos;s Services
              </h1>
              <p className="mt-8 mb-5  sm:text-xl lg:text-lg text-white">
                At Mylaw, we specialize in a wide range of practice areas,
                ensuring that we can address your legal concerns effectively.
                Whether you are an individual, a small business, or a large
                corporation, our team is ready to assist you in profuse areas.
              </p>

              <Link
                to="/contact-us"
                className="btn text-white btn-primary hover:pr-10 group transition-all rounded-none"
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
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex  lg:flex-row flex-col-reverse">
          <div className="mb-5 lg:w-3/4 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold pb-5 py-2 text-primary after:content-[''] after:block after:py-1 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
              Corporate
            </h1>
            <p className="md:text-lg text-justify">
              We provide guidelines to help you carry out your business
              activities in Indonesia, and handle all corporate matters such as
              shareholdings, general meetings of shareholders, licenses,
              compliance, intellectual property, manpower, as well as tax and
              financial tasks, etc.
            </p>
          </div>
          <div className="lg:flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[80%] h-auto text-secondary hidden lg:block"
            >
              <path
                fillRule="evenodd"
                d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto my-8 text-sm md:text:lg">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {corporateServices.map((service) => (
              <li
                key={service}
                className="border md:text-lg border-secondary p-4 items-center text-black text-center rounded transition-transform hover:scale-105"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-1 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-5 lg:w-3/4 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold pb-5 py-2 text-primary after:content-[''] after:block after:py-1 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
              Restructuring, Turnaround, and Insolvency
            </h1>
            <p className="md:text-lg text-justify">
              We are a leading and strategic business partner to collect and
              recover companies commercial debts effectively without
              jeopardizing their relationships with customers. Additionally, we
              assure our clients with no money upfront. They pay only when they
              are paid.
            </p>
          </div>
          <div className="flex justify-end">
            {/* SVG will be hidden on mobile screens */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[80%] h-auto text-secondary hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </div>
        </div>
        <div className="container mx-auto my-8 text-sm md:text:lg">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {restructurinTurnaroundInsolvency.map((service) => (
              <li
                key={service}
                className="border md:text-lg border-secondary p-4 items-center text-black text-center  rounded transition-transform hover:scale-105"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-5 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-5 lg:w-3/4 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold pb-5 py-2 text-primary after:content-[''] after:block after:py-1 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
              Permits and Licensing
            </h1>
            <p className="md:text-lg text-justify">
              Knowing that permits/licensing is the front gate in running your
              business line, therefore we also assist you with various
              licensing, as follows:
            </p>
          </div>
          <div className="flex justify-end">
            {/* SVG will be hidden on mobile screens */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[80%] h-auto text-secondary hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto my-8 text-sm md:text:lg">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {permitsAndLicensingServices.map((service) => (
              <li
                key={service}
                className="border md:text-lg  border-secondary p-4 items-center text-black text-center rounded transition-transform hover:scale-105"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-1 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-5 lg:w-3/4 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold pb-5 py-2 text-primary after:content-[''] after:block after:py-1 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
              Commercial
            </h1>
            <p className="md:text-lg text-justify">
              We represent clients in a wide range of commercial disputes from
              construction and enforceability of contracts and agreements to
              corporate actions between shareholders of corporations and members
              of legal services. We provide legal advice and represent clients
              in Merger & Acquisition transactions. Our team has advised several
              state-owned enterprises in company takeover transactions with a
              high degree of complexity.
            </p>
          </div>
          <div className="flex justify-end">
            {/* SVG will be hidden on mobile screens */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[80%] h-auto text-secondary hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto my-8 text-sm md:text:lg">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {commersialServices.map((service) => (
              <li
                key={service}
                className="border md:text-lg border-secondary p-4 items-center text-black text-center  rounded transition-transform hover:scale-105"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-3 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-5 lg:w-3/4 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold pb-5 py-2 text-primary after:content-[''] after:block after:py-1 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
              Civil and Criminal Litigation
            </h1>
            <p className="md:text-lg text-justify">
              Considering that our goal is to give the best solution, therefore,
              we will always be considerate in providing advice on legal action
              for the legal problems you are facing so that any dispute
              resolution efforts will not take up a lot of your time and funds.
              For cases that we see worth of legal action or if you choose to
              settle with legal action, we ensure you that we have a highly
              experienced team for handling cases in court.
            </p>
          </div>
          <div className="flex justify-end">
            {/* SVG will be hidden on mobile screens */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[80%] h-auto text-secondary hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto my-8 text-sm md:text:lg">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {civilAndCriminalLigitimationServices.map((service) => (
              <li
                key={service}
                className="border md:text-lg border-secondary p-4  text-black items-center text-center rounded transition-transform hover:scale-105"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-5 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-5 lg:w-3/4 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold pb-5 py-2 text-primary after:content-[''] after:block after:py-1 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
              Legal Education
            </h1>
            <p className="md:text-lg text-justify">
              Elevate your legal knowledge with our specialized Legal Education
              team. Gain the insights you need to make informed decisions and
              excel in your legal endeavors.
            </p>
          </div>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[80%] h-auto text-secondary hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="py-10 px-4 max-w-7xl mx-auto"
      >
        <ContactUs />
      </motion.div>
    </>
  );
};

export default Services;
