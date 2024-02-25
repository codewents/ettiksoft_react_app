import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/ActionPerformers/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/CompanyPages/AboutUsPage/AboutUsPage";

function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/about-us" Component={AboutUsPage} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
