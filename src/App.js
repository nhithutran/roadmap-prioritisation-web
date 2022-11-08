import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import NavigationBar from "./components/NavigationBar";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import InitiativeItem from "./components/InitiativeItem";
import NotFound from "./components/NotFound";
import SignUp from "./components/Authentication/SignUp.component";
import Login from './components/Authentication/Login.component'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard/:ticketId" element={<InitiativeItem />} />
            <Route path="/estimation" element={<div>Estimation</div>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <div className="footer">
          <p>©2022, made by Anthony Chung and Nhi Tran</p>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default App;
