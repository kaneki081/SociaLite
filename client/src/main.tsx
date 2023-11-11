import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Toaster />
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);
