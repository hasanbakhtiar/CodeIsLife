import React, { Component } from "react";

class App extends Component {
    componentDidMount(){
        
        setTimeout(()=>{
            document.querySelector('#cons').className = "container d-block"
            document.querySelector('#loading').className = "d-none"
        },2000)
    }
    componentDidUpdate(){
        console.log('update');
        document.querySelector('button').style.color = 'red';
    }
  constructor() {
    super();
    console.log('running constructor');
    this.state = {
      count: 0,
    };
  }
  render() {
    return <>
    <div id="loading" className=" d-block"><h1>Loading...</h1></div>
    <div id="cons" className="container d-none">
        <h1>count:{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
    </div>
    </>;
  }
}

export default App;
