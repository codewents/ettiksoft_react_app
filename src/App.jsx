import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/ActionPerformers/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/CompanyPages/AboutUsPage/AboutUsPage";
import CareersPage from "./Pages/CompanyPages/CareersPage/CareersPage";
import Footer from "./Components/ActionPerformers/Footer/Footer";
import IOTSolutionsPage from "./Pages/ServicesPage/IOTSolutionsPage/IOTSolutionsPage";
import MobilityEngineeringPage from "./Pages/ServicesPage/MobilityEngineeringPage/MobilityEngineeringPage";
import LifeAtEttiksoftPage from "./Pages/CompanyPages/LifeAtEttiksoftPage/LifeAtEttiksoftPage";
import ContactUsPage from "./Pages/CompanyPages/ContactUsPage/ContactUsPage";

function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/about-us" Component={AboutUsPage} />
            <Route path="/careers" Component={CareersPage} />
            <Route path="/life-at-ettiksoft" Component={LifeAtEttiksoftPage} />
            <Route path="/contact-us" Component={ContactUsPage} />
            <Route path="/iot-solutions" Component={IOTSolutionsPage} />
            <Route path="/mobility-engineering" Component={MobilityEngineeringPage} />
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
