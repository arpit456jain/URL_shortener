
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
function App() {
  return (
    <>
    <Header/>  
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/login" element={<Login/>} exact/>
        {/* <Route path="/addTask" element={<AddTask/>} exact/> */}
       </Routes>
      </Router>
    </>
    );
}

export default App;
