import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar bg-primary navbar-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            target="_blank"
            rel="noreferrer"
            href={this.props.url}
          >
          <i class={this.props.icon}></i>  {this.props.title}
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
