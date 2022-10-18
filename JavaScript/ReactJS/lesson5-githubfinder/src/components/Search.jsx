import React, { Component } from 'react'

class Search extends Component {
    constructor(){
        super();
        this.state={
            keyword:""
        }
    }

    inputChange=(e)=>{
        this.setState({
            keyword:e.target.value
        });
    }

    formSubmit=(e)=>{
        e.preventDefault();
        this.props.searchValue(this.state.keyword);

    }
  render() {
    return (
        <form onSubmit={this.formSubmit}>
      <div className="container mt-5">
        <div className="input-group mb-3">
        <input onChange={this.inputChange} type="text" className="form-control" placeholder="Enter user"   />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>
      </div>
      </form>

    )
  }
}

export default Search