import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-none d-md-block col-md-2 bg-warning py-3">
          sidebar
        </div>
        <div className="col-md-7 py-3 px-5" style={{ height: "100vh" }}>
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
