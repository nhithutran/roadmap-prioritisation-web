import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/auth.context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import config from "./config/config";

const cfg = config.load()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
