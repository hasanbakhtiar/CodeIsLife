import React from 'react'
import BlogFrom from './BlogFrom'
import { addBlog } from '../../../actions/blogaction'
import { connect } from 'react-redux'
const AddBlog = props => {
  return (
    <div>
        <h1 className='text-center'>Add Blog</h1>
        <BlogFrom onFormSubmit={(fd)=>{
            props.dispatch(addBlog(fd));
            props.history.push('/admin');
        }}/>
    </div>
  )
}

export default connect()(AddBlog)