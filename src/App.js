import React from "react";

import Homei from "./home/Homei";
import Contactus from "./contactus/Contactus";
import Login from "./registration/Login";
import { Route, Routes } from "react-router-dom"
import Newcomplain from "./newcom/Newcomplain";
import Trackcom from "./trackcom/Trackcom";
import Aboutus from "./aboutus/Aboutus";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Homei/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/new-complain" element={<Newcomplain/>}/>
        <Route path="/track-complain" element={<Trackcom/>}/>
        <Route path="/contact-us" element={<Contactus/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
      </Routes>
    </>
  );
};

export default App;
