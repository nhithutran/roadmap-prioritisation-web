import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import AuthContext from "./context/auth.context";
// Pages
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";
import SignUp from "./components/Authentication/SignUp.component";
import Login from "./components/Authentication/Login.component";

function App() {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user != undefined) {
      const userJson = JSON.parse(user);
      setAuth(userJson);
    }
  }, []);
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="estimation" element={<div>Estimation</div>} />
            <Route path="roadmap" element={<div>Roadmap</div>} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
