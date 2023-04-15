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

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/AboutUs" element={<AboutUsPage />} />
        <Route exact path="/HowItWorks" element={<HowItWorks />} />
        <Route exact path="/Channels" element={<Channels />} />
        <Route exact path="/Pricing" element={<PricingPage />} />
        <Route exact path="/Login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
