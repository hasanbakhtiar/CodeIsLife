import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const DashboardItem = ({id,title,desc,count}) => {
  return (
    <tr>
    <th scope="row">{count+1}</th>
    <td>{id}</td>
    <td>{title}</td>
    <td>{desc}</td>
    <td><Link className='btn btn-warning' to="/edit">Edit</Link></td>
  </tr>
  )
}

export default DashboardItem