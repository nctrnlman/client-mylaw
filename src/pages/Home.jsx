import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Strategy from "../components/Strategy";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Summary />
      <AboutUs />
      <Services />
      <Clients />
      <Strategy />
    </>
  );
}

export default Home;
