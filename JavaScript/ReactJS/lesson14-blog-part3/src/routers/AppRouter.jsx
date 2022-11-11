import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/update/AddBlog";
import EditBlog from "../pages/admin/update/EditBlog";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mt-5">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blogs" exact component={Blogs}></Route>
          <Route path="/blogs/:id" component={BlogDetails}></Route>
          <Route path="/admin" component={Dashboard}></Route>
          <Route path="/add" component={AddBlog}></Route>
          <Route path="/edit" component={EditBlog}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
