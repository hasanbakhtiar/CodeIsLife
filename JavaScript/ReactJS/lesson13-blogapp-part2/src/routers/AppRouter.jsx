import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
