import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ParentPage from "./Pages/ParentPage";
import Signin from "./Pages/Signin";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/parent" element={<ParentPage />} />
<<<<<<< HEAD
      <Route path="/signin" element={<Signin />} />
=======
      <Route path="/signin" element={<Signin/>}/>
>>>>>>> pinar
    </Routes>
  );
}

export default App;

