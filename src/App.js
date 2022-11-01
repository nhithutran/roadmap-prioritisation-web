import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import NavigationBar from "./components/NavigationBar";
import Initiatives from "./components/Initiatives.js";
import NoMatch from "./components/NoMatch";


function App () {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Initiatives/>} />
            <Route element={<NoMatch />} />
          </Routes>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
