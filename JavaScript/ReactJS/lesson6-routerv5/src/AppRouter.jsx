import React, { Component } from 'react'
import { BrowserRouter,  NavLink, Route, Switch } from 'react-router-dom'



class Nav extends Component{
  render(){
    return(
      <ul>
        <li><NavLink activeClassName='active' exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName='active' to="/about">About</NavLink></li>
        <li><NavLink activeClassName='active' to="/contact">Contact</NavLink></li>
      </ul>
    )
  }
}

class NotFoundPage extends Component{
  render(){
    return(
      <h1>404 - not found</h1>
    )
  }
}

class Home extends Component{
  render(){
    return(
      <h1>Home</h1>
    )
  }
}

class About extends Component{
  render(){
    return(
      <h1>About</h1>
    )
  }
}

class Contact extends Component{
  render(){
    return(
      <h1>Contact</h1>
    )
  }
}

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav />
      <Switch>
      <Route component={Home} exact path="/"></Route>
        <Route component={About} path="/about"></Route>
        <Route component={Contact} path="/contact"></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter