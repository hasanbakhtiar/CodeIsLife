import React from 'react'

const BlogDetailItem = ({id,title,desc}) => {
  return (
    <div className='container mt-5'>
        <p>Blog ID: {id}</p>
        <p>Blog title: {title}</p>
        <p>Blog description: {desc}</p>
    </div>
  )
}

export default BlogDetailItem