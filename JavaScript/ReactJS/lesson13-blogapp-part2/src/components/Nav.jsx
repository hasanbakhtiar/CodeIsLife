import React from 'react'
import { Link, NavLink,  } from 'react-router-dom'

const Nav = () => {
  return (
 <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className="nav-link" aria-current="page" end to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
        </li>
     
        
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-warning" type="submit">Dashboard</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Nav