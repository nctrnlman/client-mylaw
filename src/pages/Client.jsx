import React from "react";
import ContactUs from "../components/ContactUs";
import hokben from "../assets/clients-logo/hokben.png";
import perikanan from "../assets/clients-logo/perikanan-indonesia.png";
import pln from "../assets/clients-logo/pln.png";
import tokio from "../assets/clients-logo/tokio.png";
import trilogi from "../assets/clients-logo/trilogi.png";
import gowork from "../assets/clients-logo/gowork.png";
import Navbar from "../components/Navbar";
import TestimonialCard from "../components/TestimonialCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

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

  const logos = [hokben, trilogi, pln, tokio];

  const testimonialsData = [
    {
      clientName: "PT Eka Bogainti (HokBen)     ",
      position: "Juan L.G. - Procurement",
      testimonial:
        "Kami bekerjasama dengan Mylaw.id untuk mengurus Andalalin, SLF dan izin restoran kami lainnya yang berada di Jawa Timur. Sangat responsif, tim bergerak h+1 setelah surat kuasa ditandatangani dan sangat komunikatif dalam pengerjaan. Anggota tim juga sangat paham mengenai dunia perijinan sehingga semua yang dikerjakan beres tuntas. Terima kasih.",
    },
    {
      clientName: "PT Putri Penuai Berkat      ",
      position: "Putri Sarah - Owner",
      testimonial:
        "Jasa pembuatan PT yang sangat bisa diandalkan. Proses pengerjaannya cepat dan pelayanan yang sigap dan responsif. Seluruh proses mulai dari konsultasi hingga pembuatan dokumen diberikan instruksi yang rinci.",
    },
    {
      clientName: "CV. Visi Harum Sukses      ",
      position: "Santa R. - Owner",
      testimonial:
        "Kami sebelumnya memakai jasa legal dari platform lain, proses pengerjaan dan koordinasi sangat lama tidak seperti Mylaw.id yang memberikan layanan cepat sehingga seluruh masalah hukum kami selesai dengan baik.Terimakasih Mylaw.id ",
    },
  ];

  return (
    <div>
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

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-4  mb-12 md:mb-20">
            {logos.map((logo, index) => (
              <div key={index} className="w-32  md:w-44 h-auto mx-auto mb-4">
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="w-full h-auto transform scale-110"
                />
              </div>
            ))}
            <div className="w-36  md:w-[200px] h-auto mx-auto mb-4">
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
            </div>
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
            <span className="">What Our </span>
            <span className="">Clients </span>
            <span className="">Say</span>
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
