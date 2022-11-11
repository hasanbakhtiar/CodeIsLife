import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import DashboardItem from '../../components/admin/DashboardItem'

const Dashboard = props => {
  return (
    <div>
      <Link className="btn btn-primary" to="/add">Add</Link>
        
        <table className="table">
          
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Desc</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
  {props.pvalue.map((fd,i)=>(
         <DashboardItem count={i} key={i} {...fd}/>
       ))}
    
  </tbody>
</table>
    </div>
  )
}

const mapStateToProps =(state)=>{
    return{
      pvalue:state.br
    }
  }

export default connect(mapStateToProps)(Dashboard)