import "./App.css";
import LandingPage from "./Pages/landingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
