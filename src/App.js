import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import AuthContext from "./context/auth.context";
// Pages
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import SignUp from "./components/Authentication/SignUp.component";
import Login from "./components/Authentication/Login.component";
import NotAuthorized from "./components/Authentication/NotAuthorized.component";
import EmailRecovery from "./components/Authentication/EmailRecovery.component";
import Users from "./components/Users/Users.components";
import InitiativeItem from "./components/InitiativeItem/IntiativeItem.component";
import PendingSignUpComponent from "./components/Authentication/PendingSignUp.component";
import RequireAuth from "./components/RequireAuth";
import ChangePassword from "./components/Authentication/ChangePassword.component";
import EstimationPage from "./components/EstimationPage";

function App() {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    setAuth(null);
  }, []);

  return (
    <div className="container">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            //*****private******
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/initiatives/:id" element={<InitiativeItem />} />
              <Route path="estimation" element={<EstimationPage />} />
              <Route path="roadmap" element={<div>Roadmap</div>} />
              <Route path="users" element={<Users />} />
              <Route path="changepassword" element={<ChangePassword />} />
            </Route>
            //*****public************
            <Route
              path="signup/pendingsignup"
              element={<PendingSignUpComponent />}
            />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="not-authorized" element={<NotAuthorized />} />
            <Route path="forgot-password" element={<EmailRecovery />} />
            //Not found
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
