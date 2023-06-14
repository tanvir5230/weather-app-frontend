import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="d-none d-md-block col-md-2 bg-warning"
          style={{ height: "100vh" }}
        >
          sidebar
        </div>
        <div className="col-md-7" style={{ height: "100vh" }}>
          <HomePage />
        </div>
        <div
          className="d-none d-md-block col-md-3 bg-warning"
          style={{ height: "100vh" }}
        >
          weather forecast
        </div>
      </div>
    </div>
  );
}

export default App;
