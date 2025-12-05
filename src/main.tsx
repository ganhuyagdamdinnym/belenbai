import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Organization from "./pages/organization.tsx";
import HouseHold from "./pages/household.tsx";
import Individual from "./pages/individual.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/organization" element={<Organization />} />
      <Route path="/household" element={<HouseHold />} />
      <Route path="/individual" element={<Individual />} />
    </Routes>
  </Router>
);
