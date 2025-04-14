import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Services from "./pages/Services";
import CookieConsent from "./components/CookieConsent";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import TermsConditions from "./components/TermsConditions";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CookieConsent />
    </>
  );
}

export default App;
