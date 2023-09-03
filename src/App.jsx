import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Summary />
        <AboutUs />
        <Clients />
      </div>
    </>
  );
}

export default App;
