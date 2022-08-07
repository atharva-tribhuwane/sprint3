import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login"
import Products from "./components/Products"
function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>

  </div>;
}

export default App;
