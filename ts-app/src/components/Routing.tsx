import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import PostDetails from "../pages/postDetails/PostDetails";
import Detail from "../pages/detail/Detail";
import Register from "../pages/register/Register";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PostDetails" element={<PostDetails />} />
        <Route path="/Integration/Register" element={<Register />} />
        <Route path="/Integration/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
