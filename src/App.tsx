import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomePage2 from "./Pages/HomePage2";
import ParentPage from "./Pages/ParentPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage2 />} />
      <Route path="/" element={<HomePage2 />} />
      <Route path="/" element={<HomePage2 />} />
      <Route path="/" element={<HomePage2 />} />
      <Route path="/parent" element={<ParentPage />} />
    </Routes>
  );
}

export default App;

