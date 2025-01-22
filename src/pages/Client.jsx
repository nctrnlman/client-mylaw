import ContactUs from "../components/ContactUs";
import hokben from "../assets/clients-logo/hokben.png";
import perikanan from "../assets/clients-logo/perikanan-indonesia.png";
import pln from "../assets/clients-logo/pln.png";
import tokio from "../assets/clients-logo/tokio.png";
import trilogi from "../assets/clients-logo/trilogi.png";
import gowork from "../assets/clients-logo/gowork.png";
import ptAlkimiaNiagaJaya from "../assets/clients-logo/pt-alkimia-niaga-jaya.jpg";
import ptCscesCina from "../assets/clients-logo/pt-csces-cina.png";
import ptCywaInformatikaAlgoritma from "../assets/clients-logo/pt-cywa-informatika-algoritma.jpg";
import ptEcomConsulting from "../assets/clients-logo/pt-ecom-consulting.png";
import ptEraTeknikSejahtera from "../assets/clients-logo/pt-era-teknik-sejahtera.jpeg";
import ptHextoriaDimensiAset from "../assets/clients-logo/pt-hextoria-dimensi-aset.jpg";
import ptKitalulus from "../assets/clients-logo/pt-kitalulus.png";
import ptServvoFireIndonesia from "../assets/clients-logo/pt-servvo-fire-indonesia.jpg";
import ptTriKhatulistiwaFishindo from "../assets/clients-logo/pt-tri-khatulistiwa-fishindo.jpg";
import ptVidyaIndonesiaSinergi from "../assets/clients-logo/pt-vidya-indonesia-sinergi.jpg";
import Navbar from "../components/Navbar";
import TestimonialCard from "../components/TestimonialCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import SEO from "../components/SEO";

function Client() {
  const clientNamesA = [
    "PT. Kolaborasi Global Sukses",
    "PT. Raksasa Laju Lintang",
    "PT. Indofresh",
    "PT. Gastro Gizi Sarana",
    "PT. Bondor Indonesia",
  ];

  const clientNamesC = [
    // "Schneider Group",
    "PT. Jaya Lestari Holidays",
    "PT. Berlian Amal Perkasa",
    "PT. Properti Solusi Manajemen",
    "PT. Galderma Indonesia Healthcare",
    "PT. Workday Indonesia Services",
    // "Logitech Singapore Pte, Ltd.",
  ];

  const clientNamesB = [
    "PT. American Standard Indonesia",
    "PT. Asuransi Wahana Tata",
    "PT. Balihai Brewery Indonesia",
    "PT. Anta Express Tour & Services",
    "PT. Actavis Indonesia",
  ];
  const clientNamesD = [
    "PT. Sinar Apparel Indonesia",
    "PT. Petrindo Semesta",
    "PT. Prakarsa Semesta Alam",
    "PT. Putra Damai Abadi",
    "PT. Wahana Tata",
  ];
  const clientNamesE = [
    "Schneider Group",
    "Logitech Singapore Pte, Ltd.",
    "Galderma Singapore Pte, Ltd.",
  ];

  const logos = [
    { src: ptAlkimiaNiagaJaya, name: "PT Alkimia Niaga Jaya" },
    { src: ptCscesCina, name: "PT CSCEC China" },
    { src: ptCywaInformatikaAlgoritma, name: "PT Cywa Informatika Algoritma" },
    { src: ptEcomConsulting, name: "PT Ecom Consulting" },
    { src: ptEraTeknikSejahtera, name: "PT Era Teknik Sejahtera" },
    { src: ptHextoriaDimensiAset, name: "PT Hextoria Dimensi Aset" },
    { src: ptKitalulus, name: "PT Kitalulus" },
    { src: ptServvoFireIndonesia, name: "PT Servvo Fire Indonesia" },
    { src: ptTriKhatulistiwaFishindo, name: "PT Tri Khatulistiwa Fishindo" },
    { src: ptVidyaIndonesiaSinergi, name: "PT Vidya Indonesia Sinergi" },
    { src: gowork, name: "PT Kolaborasi Global Sukses" },
    { src: hokben, name: "PT Eka Bogainti" },
  ];

  const testimonialsData = [
    {
      clientName:
        "Distinguished Client: China State Construction Engineering Corporation Ltd.",
      position: "Project Highlight",
      testimonial:
        "We provide comprehensive licensing and legal assistance to China State Construction, the world’s largest engineering contractor. The company leads the global construction industry with unparalleled expertise in housing, infrastructure, and urban development. Ranked No. 9 on the 2022 Fortune Global 500 list and topping ENR’s Top 250 Global Contractors, the company operates in over 100 countries, delivering iconic projects, including constructing over 90% of skyscrapers above 300 meters. Our support enables the client to drive development in Indonesia, guided by a commitment to innovation, sustainability, and the 'Belt and Road' initiative.",
    },
    {
      clientName:
        "Civil Building and Power Plant Construction Projects, Debt Recovery Service, Industry Establishment, etc.",
      position: "Project Highlight",
      testimonial:
        "We provide comprehensive legal representation across a diverse array of commercial transactions and dispute resolutions, encompassing contract drafting, negotiation, project execution, and the management of corporate actions involving companies and their stakeholders. Our expertise frequently involves transactions exceeding hundreds of millions of rupiah or tens of thousands of dollars, reflecting our commitment to delivering impactful and strategic legal solutions.",
    },
    {
      clientName: "Featured Retainer Service: Gowork, Ecom Consulting, etc.",
      position: "Project Highlight",
      testimonial:
        "We offer comprehensive legal support through retainer arrangements for F&B, industrial, and construction companies in Indonesia, as well as foreign enterprises with beneficial owners from Singapore, Switzerland, and China. Our practice also includes collaborations with established firms and innovative startups. Notably, we have partnered with Gowork, Indonesia's leading premium coworking and office space provider, boasting over 25 locations across multiple cities and a robust network of 70,000 members. Gowork entrusts us to deliver operational establishment, legal, and compliance services to its members and partners, reflecting our commitment to excellence and tailored solutions.",
    },
  ];

  return (
    <div>
      <SEO
        title="Our Clients | Mylaw.id"
        description="Explore the diverse and valued clients who have trusted Mylaw on their journey to success."
        keywords="Mylaw clients, client testimonials, legal services"
      />
      <Navbar />
      <div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col  justify-between gap-4 max-w-7xl mx-auto container "
        >
          <div className="text-center md:text-left w-full md:mt-[50px]  md:py-20 py-10 px-3">
            <h2 className="text-4xl md:text-7xl font-bold pb-6">
              <span className="text-black">Discover Our </span>
              <span className="text-primary">Clients</span>
            </h2>
            <p className="text-lg md:text-2xl">
              Explore the diverse and valued clients who have trusted us on
              their journey to success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between w-full h-auto mb-8 text-center transition-all transform hover:scale-105 hover:shadow-lg hover:bg-white p-6 rounded-xl"
              >
                <div className="flex-grow flex items-center justify-center mb-4">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-auto h-auto transition-all duration-300 ease-in-out"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 w-full text-center">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* <div className="bg-primary text-white pb-[80px] pt-[80px] md:mt-[150px] ">
          <div className=" mx-auto container px-4 ">
            <h2 className="text-4xl md:text-6xl text-center  font-bold mb-4 md:mb-8 pb-2 md:pb-5">
              Our Valued Clients
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between px-4 py-10 gap-4 ">
           
              <div className="flex flex-col text-lg mb-4 md:mb-0  ">
                {clientNamesA.map((name, index) => (
                  <p key={index} className="font-normal mb-2">
                    {name}
                  </p>
                ))}
              </div>

          
              <div className="flex flex-col text-lg mb-4 md:mb-0 ">
                {clientNamesB.map((name, index) => (
                  <p key={index} className="font-normal mb-2">
                    {name}
                  </p>
                ))}
              </div>

          
              <div className="flex flex-col text-lg mb-4 md:mb-0 ">
                {clientNamesC.map((name, index) => (
                  <p key={index} className="font-normal mb-2">
                    {name}
                  </p>
                ))}
              </div>

     
              <div className="flex flex-col text-lg mb-4 md:mb-0  ">
                {clientNamesD.map((name, index) => (
                  <p key={index} className="font-normal mb-2">
                    {name}
                  </p>
                ))}
              </div>

              <div className="flex flex-col text-lg mb-4 md:mb-0  ">
                {clientNamesE.map((name, index) => (
                  <p key={index} className="font-normal mb-2">
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div className="min-h-screen flex flex-col  items-center justify-center p-10 pt-20 max-w-7xl mx-auto container  ">
          {/* Konten lainnya */}
          {/* <h2 className="text-4xl md:text-6xl text-center text-primary font-bold mb-4 md:mb-8 pb-2 md:pb-10">
            What Our Clients Say
          </h2> */}

          <h2 className="text-4xl md:text-6xl text-center text-primary font-bold mb-10 md:mb-8 pb-2 md:pb-10">
            <span className="">MYLAW INDONESIA MILESTONE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row pt-4 md:pt-20 items-center justify-around p-5">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
            <h4 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-center md:text-left">
              Ready to make a move? Contact us now and discover how we can guide
              you through legal strategies and safeguard your interests.
            </h4>
            <a
              href="/contact-us"
              className="flex justify-center md:justify-start"
            >
              <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out">
                Get in Touch
              </button>
            </a>
          </div>

          <div className="w-full md:w-1/2 pl-0 md:pl-8 flex justify-center">
            <img src={woman} alt="Woman" className="w-48 md:w-64 h-auto" />
          </div>
        </div> */}

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="py-5 pb-10 px-5 max-w-7xl mx-auto container  "
        >
          <ContactUs />
        </motion.div>
      </div>
    </div>
  );
}

export default Client;

{
  /* <div className="w-36  md:w-[200px] h-auto mx-auto mb-4">
<img
  src={gowork}
  alt=""
  className="w-full h-auto transform scale-110"
/>
</div>
<div className="w-36  md:w-[200px] h-auto mx-auto mb-4">
<img
  src={perikanan}
  alt=""
  className="w-full h-auto transform scale-110"
/>
</div> */
}
