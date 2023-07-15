
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/signup" element={<SignUp/>} exact/>
       </Routes>
      </Router>
    </>
    );
}

export default App;
