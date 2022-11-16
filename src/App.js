import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import AuthContext from "./context/auth.context";
// Pages
import Layout from "./Components/Layout";
import InitiativePage from "./Components/InitiativePage";
import NotFound from "./Components/NotFound";
import SignUp from "./Components/Authentication/SignUp.component";
import Login from "./Components/Authentication/Login.component";
import NotAuthorized from "./Components/Authentication/NotAuthorized.component";
import EmailRecovery from "./Components/Authentication/EmailRecovery.component";
import Users from "./Components/Users/Users.components";
import InitiativeItem from "./Components/InitiativeItem/IntiativeItem.component";
import PendingSignUpComponent from "./Components/Authentication/PendingSignUp.component";
import RequireAuth from "./Components/RequireAuth";
import ChangePassword from "./Components/Authentication/ChangePassword.component";
import EstimationPage from "./Components/EstimationPage";

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
              <Route path="/" element={<InitiativePage />} />
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
