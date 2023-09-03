import AboutUs from "./components/AboutUs";
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
      </div>
    </>
  );
}

export default App;
