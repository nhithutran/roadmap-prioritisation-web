import React from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import InitiativeTopPanel from "./InitiativeTopPanel";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <div className="footer">
        <p>©2022, made by Anthony Chung and Nhi Tran</p>
      </div>
    </>
  );
};

export default Layout;
