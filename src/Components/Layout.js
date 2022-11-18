import React from "react";
import NavigationBar from "./NavigationBar";
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
