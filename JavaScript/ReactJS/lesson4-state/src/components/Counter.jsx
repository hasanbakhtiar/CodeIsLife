import React, { Component } from 'react'

class Text extends Component{
  render(){
    return(
      <h1>{this.props.test}</h1>
    )
  }
}



class Counter extends Component {
  constructor(){
    super();
    this.decrement = this.decrement.bind(this);
    this.state={
      count:0
    }
  }
  // increment=()=>{
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  decrement(){
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }
  render() {
    return (
      <>
    <div className="container mt-5">
    <button className='btn btn-danger' onClick={this.decrement}>-</button>
      <span className='mx-3'>{this.state.count}</span>
      <button className='btn btn-success' onClick={this.increment=()=>{
         this.setState({
              count: this.state.count + 1
            })
      }}>+</button>
      <Text test = "hello" />
      <Text test = "new value" />
    </div>
      </>
    )
  }
}

export default Counter