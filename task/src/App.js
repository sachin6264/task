import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/allroutes/allroutes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
