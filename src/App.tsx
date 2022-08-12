import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;

