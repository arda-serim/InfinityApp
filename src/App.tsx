import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ParentPage from "./Pages/ParentPage";
import Signin from "./Pages/Signin";
import Childedit from "./Pages/Childedit";



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/parent" element={<ParentPage />} />
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/childedit" element={<Childedit/>}/>
    </Routes>
  );
}

export default App;

