import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./utils/context/dataContext";
import { BrowserRouter as Router } from "react-router-dom";
import Routeur from "./utils/Routes";

/* components*/
import Header from "./components/header";
import Footer from "./components/footer";
import "./assets/sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Header />
        <Routeur />
        <Footer />
      </DataProvider>
    </Router>
  </React.StrictMode>
);
