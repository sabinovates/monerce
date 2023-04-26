import "./App.css";
import LandingPage from "./Pages/landingPage";
import AboutUsPage from "./Pages/AboutUsPage";
import HowItWorks from "./Pages/HowItWorksPage";
import Channels from "./Pages/Channels";
import PricingPage from "./Pages/PricingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import FAQ from "./Pages/FAQ";
import ContactUs from "./Pages/ContactUs";
import BecomeAnAgency from "./Pages/BecomeAnAgency";
import TermsPage from "./Pages/TermsPage";
import PrivacyPage from "./Pages/PrivacyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/aboutUs" element={<AboutUsPage />} />
        <Route exact path="/howItWorks" element={<HowItWorks />} />
        <Route exact path="/channels" element={<Channels />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/contact_us" element={<ContactUs />} />
        <Route exact path="/terms" element={<TermsPage />} />
        <Route exact path="/privacy" element={<PrivacyPage />} />
        <Route exact path="/become_an_agency" element={<BecomeAnAgency />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
