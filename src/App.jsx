import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Client from "./pages/Client";
import Services from "./pages/Services";
import ArticleDetail from "./pages/Article-detail";
import Article from "./pages/Article";

function App() {
  return (
    <div className="place-content-center min-h-screen bg-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/client" element={<Client />} />
        <Route path="/services" element={<Services />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
