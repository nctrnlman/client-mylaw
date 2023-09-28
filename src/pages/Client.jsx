import React from "react";
import hokben from "../assets/clients-logo/hokben.png";
import perikanan from "../assets/clients-logo/perikanan-indonesia.png";
import pln from "../assets/clients-logo/pln.png";
import tokio from "../assets/clients-logo/tokio.png";
import trilogi from "../assets/clients-logo/trilogi.png";
import logitech from "../assets/clients-logo/logitech.png";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";

function Client() {
  const clientNamesA = [
    "PT. KolaborasiGlobal Sukses (Gowork)",
    "PT. Raksasa Laju Lintang",
    "PT. Indofresh",
    "PT. Gastro Gizi Sarana",
    "PT. Bondor Indonesia",
    "Schneider Group",
    "PT. Berlian Amal Perkasa",
    "PT. Properti Solusi Manajemen",
    "PT. Galderma Indonesia Healthcare",
    "PT. Workday Indonesia Services",
    "Logitech Singapore Pte, Ltd.",
  ];

  const clientNamesB = [
    "PT. American Standard Indonesia",
    "PT. Asuransi Wahana Tata",
    "PT. Balihai Brewery Indonesia",
    "PT. Anta Express Tour & Services",
    "PT. Actavis Indonesia",
    "PT. Sinar Apparel Indonesia",
    "PT. Petrindo Semesta",
    "PT. Prakarsa Semesta Alam",
    "PT. Putra Damai Abadi",
    "PT. Wahana Tata",
    "PT. Jaya Lestari Holidays",
  ];

  const logos = [hokben, perikanan, pln, tokio, trilogi, logitech];

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-20 py-10">
        <h2 className="text-4xl md:text-6xl text-primary text-center font-semibold mb-4 md:mb-8 pb-2 md:pb-10">
          Discover Our Valued Clients
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          {logos.map((logo, index) => (
            <div key={index} className="w-32 h-auto mx-auto">
              <img src={logo} alt={`Logo ${index}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
        <div className="bg-white text-black p-4 rounded shadow hover:shadow-lg mt-4 md:mt-10">
          <div className="flex flex-col md:flex-row justify-around py-4">
            <div className="flex flex-col">
              {clientNamesA.map((name, index) => (
                <p key={index} className="text-lg md:text-xl font-normal mb-2">
                  {name}
                </p>
              ))}
            </div>

            <div className="flex flex-col">
              {clientNamesB.map((name, index) => (
                <p key={index} className="text-lg md:text-xl font-normal mb-2">
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <ContactUs />
      </div>
    </div>
  );
}

export default Client;
