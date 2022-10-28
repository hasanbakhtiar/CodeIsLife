import React, { Component } from 'react'


class List extends Component{
    componentWillUnmount(){
        window.confirm('a u sure delete component?');
    }
    
    render(){
        return(
            <ul>
                <li>test list</li>
                <li>test list</li>
                <li>test list</li>
            </ul>
        )
    }
}

class DeleteCompo extends Component {
    state={display:true}
    delete=()=>{
        this.setState({display:false})
    }
  render() {
    let info;
    if (this.state.display) {
        info = <List />
    }

    return (
      <div className='container mt-5'>
        {info}
        <button onClick={this.delete}>delete lists</button>
      </div>
    )
  }
}

export default DeleteCompo