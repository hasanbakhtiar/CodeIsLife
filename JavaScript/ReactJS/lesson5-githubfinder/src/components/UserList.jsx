import React, { Component } from 'react'
import User from './User'

class UserList extends Component {
  render() {
    return (
   <div className="container mt-5">
       <div className='row gap-3'>
        {this.props.uservalue.map((fd,i)=>(
          <User datauser={fd} key={i}/>

        ))}
      </div>
   </div>
    )
  }
}

export default UserList