import React from "react";
import ContactUs from "../components/ContactUs";
import hokben from "../assets/clients-logo/hokben.png";
import perikanan from "../assets/clients-logo/perikanan-indonesia.png";
import pln from "../assets/clients-logo/pln.png";
import tokio from "../assets/clients-logo/tokio.png";
import trilogi from "../assets/clients-logo/trilogi.png";
import logitech from "../assets/clients-logo/logitech.png";
import Navbar from "../components/Navbar";
import TestimonialCard from "../components/TestimonialCard";

function Client() {
  const clientNamesA = [
    "PT. KolaborasiGlobal Sukses (Gowork)",
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

  const logos = [hokben, trilogi, tokio];
  const logo = [pln, perikanan, logitech];

  const testimonialsData = [
    {
      clientName: "John Doe",
      position: "CEO, ABC Company",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      clientName: "John Doe",
      position: "CEO, ABC Company",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      clientName: "John Doe",
      position: "CEO, ABC Company",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Tambahkan testimoni lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Bagian kiri */}
          <div className="text-center md:text-left w-full md:w-1/2 py-10">
            <h2 className="text-4xl md:text-5xl font-bold pb-6">
              <span className="text-black">Discover Our </span>
              <span className="text-primary">Clients</span>
            </h2>
            <p className="text-lg">
              Explore the diverse and valued clients who have trusted us on
              their journey to success.
            </p>
          </div>

          {/* Bagian kanan */}
          <div className="flex flex-col md:flex-row  justify-around  md:w-1/2">
            <div className="flex flex-col items-center md:items-start pt-10 justify-between gap-14 ">
              {logos.map((logo, index) => (
                <div key={index} className="w-32 h-auto mx-auto mb-4">
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="w-full h-auto transform scale-110"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start pt-10 justify-between gap-14 ">
              {logo.map((logo, index) => (
                <div key={index} className="w-32 h-auto mx-auto mb-4">
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="w-full h-auto transform scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-black py-10 my-[70px]">
          <h2 className="text-4xl md:text-4xl text-center text-black font-bold mb-4 md:mb-8 pb-2 md:pb-5">
            Our Valued Clients
          </h2>
          <div className="flex flex-col md:flex-row justify-between p-4">
            {/* Client Names A */}
            <div className="flex flex-col text-lg mb-4 md:mb-0 md:w-1/4">
              {clientNamesA.map((name, index) => (
                <p key={index} className="font-normal mb-2">
                  {name}
                </p>
              ))}
            </div>

            {/* Client Names B */}
            <div className="flex flex-col text-lg mb-4 md:mb-0 md:w-1/4">
              {clientNamesB.map((name, index) => (
                <p key={index} className="font-normal mb-2">
                  {name}
                </p>
              ))}
            </div>

            {/* Client Names C */}
            <div className="flex flex-col text-lg mb-4 md:mb-0 md:w-1/4">
              {clientNamesC.map((name, index) => (
                <p key={index} className="font-normal mb-2">
                  {name}
                </p>
              ))}
            </div>

            {/* Client Names D */}
            <div className="flex flex-col text-lg md:w-1/4">
              {clientNamesD.map((name, index) => (
                <p key={index} className="font-normal mb-2">
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10">
          <h2 className="text-4xl md:text-4xl text-center text-primary font-bold mb-4 md:mb-8 pb-2 md:pb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <div className="p-5">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Client;
