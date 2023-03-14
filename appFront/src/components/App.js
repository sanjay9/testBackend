import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Register from "./userAccounts/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <div style={{ margin: "90px" }}>
        <Routes>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
