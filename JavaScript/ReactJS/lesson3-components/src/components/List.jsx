import React, { Component } from 'react'

class List extends Component {
    render() {
      return (
        <div className="card col-12 col-sm-12 col-md-4">
          <div className="card-body">
            <h5 className="card-title">{this.props.mytitle}</h5>
            <h6>{this.props.myprice}$</h6>
            <p>{this.props.mydescription}</p>
            <p className="card-text">{this.props.mycategory}</p>
          </div>
        </div>
      );
    }
  }

export default List