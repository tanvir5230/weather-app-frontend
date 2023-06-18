import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="d-none d-md-block col-md-2 py-3"
          style={{ borderRight: "2px solid #F1F4F5" }}
        >
          <Sidebar />
        </div>
        <div className="col-md-7 px-4" style={{ height: "100vh" }}>
          <HomePage />
        </div>
        <div
          className="d-none d-md-block col-md-3 bg-warning py-3"
          style={{ height: "100vh" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
