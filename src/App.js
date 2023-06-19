import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { NavbarForSmallScreen } from "./components/Sidebar/NavbarForSmallScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WeatherForecast } from "./components/WeatherForecast/WeatherForecast";
import { DeveloperInfo } from "./pages/DeveloperInfo/DeveloperInfo";
import { ContactMe } from "./pages/ContactMe/ContactMe";

function App() {
  return (
    <Router>
      <div className="container-fluid overflow-hidden">
        <div className="d-lg-none postion-absolute fixed-bottom d-flex justify-content-center align-items-center">
          <NavbarForSmallScreen />
        </div>
        <div className="row">
          <div
            className="d-none d-lg-block col-lg-2 py-3"
            style={{ borderRight: "2px solid #F1F4F5", overflow: "hidden" }}
          >
            <Sidebar />
          </div>
          <div
            className="col-lg-7 px-4 overflow-auto"
            style={{ height: "100vh" }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/previous-weather"
                element={
                  <h3 className="py-3 font-weight-bold text-center">
                    Coming soon!!!
                  </h3>
                }
              />
              <Route path="/contact-me" element={<ContactMe />} />
              <Route path="/about" element={<DeveloperInfo />} />
            </Routes>
          </div>
          <div
            className="d-none d-md-block col-lg-3 py-3"
            style={{ height: "100vh", borderLeft: "2px solid #F1F4F5" }}
          >
            <h5 style={{ textAlign: "center" }}>Weather Forecast</h5>
            <WeatherForecast />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
