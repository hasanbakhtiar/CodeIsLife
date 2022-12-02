import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import { MovieProvider } from "../context/MovieContext";
import Home from "../pages/Home";
import MovieLists from "../pages/MovieLists";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <MovieProvider>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<MovieLists />}></Route>
        </Routes>
      </div>
      </MovieProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
