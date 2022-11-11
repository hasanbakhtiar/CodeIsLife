import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({title,desc,id}) => {
  return (
    <div className='col-12 col-sm-6 col-md-4'>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <Link to={`blogs/${id}`}>learn more</Link>
  </div>
</div>
</div>
  )
}

export default BlogCard