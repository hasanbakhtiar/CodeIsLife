import React, { Component } from 'react'

class User extends Component {
  render() {
    const {login,avatar_url,html_url,node_id} = this.props.datauser;

    return (
       <div className="card" style={{width: '15rem'}}>
            <img src={avatar_url} className="card-img-top" alt={avatar_url} />
             <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <p className="card-text">{node_id}</p>
                <a  rel="noreferrer" target="_blank" href={html_url} re className="btn btn-primary">Go Profile</a>
            </div>
      </div>

    )
  }
}

export default User