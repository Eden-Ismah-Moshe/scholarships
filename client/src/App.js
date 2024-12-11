import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Scholarships from "./pages/Scholarships/Scholarships";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/scholarships" Component={Scholarships} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
