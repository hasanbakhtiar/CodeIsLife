import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
 class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route element={<Home/>} path="/"></Route>
          <Route element={<About/>} path="/about"></Route>
          <Route element={<Contact/>} path="/contact"></Route>
          <Route element={<NotFoundPage/>} path="*"></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    )
  }
}

export default AppRouter