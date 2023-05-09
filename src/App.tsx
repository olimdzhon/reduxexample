import React from "react";
import "./App.css";
import { HomePage } from "./containers/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotFoundPage } from "./containers/NotFoundPage";
import { UserPage } from "./containers/UserPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/user/:userId" Component={UserPage} />
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
