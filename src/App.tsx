import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ParentPage from "./Pages/ParentPage";
import Signin from "./Pages/Signin";
import Childedit from "./Pages/Childedit";
import ChildPage from "./Pages/ChildPage";
import './App.css';
import './declaration.d.ts';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/parent" element={<ParentPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/childedit" element={<Childedit />} />
      <Route path="/childpage" element={<ChildPage />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;

