import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Strategy from "../components/Strategy";
import SEO from "../components/SEO";
function Home() {
  return (
    <>
      <SEO
        title="Your Trusted Legal Partner | Mylaw.id"
        description="Welcome to MYLAW.ID, your trusted legal partner. Explore our wide range of legal services and solutions designed to meet your needs."
        keywords="legal services, law firm, MYLAW.ID, legal solutions, trusted legal partner"
      />
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
