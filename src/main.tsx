import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navigation />
    <Home />
    <Footer />
  </React.StrictMode>
);
