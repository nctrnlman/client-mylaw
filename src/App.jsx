import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Strategy from "./components/Strategy";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Summary />
        <AboutUs />
        <Services />
        <Clients />
        <Strategy />
      </div>
    </>
  );
}

export default App;
