import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WeatherForecast } from "./components/WeatherForecast/WeatherForecast";

function App() {
  return (
    <Router>
      <div className="container-fluid overflow-hidden">
        <div className="row">
          <div
            className="d-none d-md-block col-lg-2 py-3"
            style={{ borderRight: "2px solid #F1F4F5", overflow: "hidden" }}
          >
            <Sidebar />
          </div>
          <div className="col-lg-7 px-4" style={{ height: "100vh" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/previous-weather"
                element={<div>Previous weather</div>}
              />
              <Route path="/contact-me" element={<div>contact-me</div>} />
              <Route path="/about" element={<div>About Me</div>} />
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
