import React from 'react'

const BlogCard = ({title,desc}) => {
  return (
    <div className='col-12 col-sm-6 col-md-4'>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
  </div>
</div>
</div>
  )
}

export default BlogCard