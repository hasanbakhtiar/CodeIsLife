import React from 'react'
import { connect } from 'react-redux'
import { editBlog, removeBlog } from '../../../actions/blogaction'
import BlogFrom from './BlogFrom'

const EditBlog = props => {
  return (
    <div>
      <h3 className='text-center '>Edit Blog</h3>
      <BlogFrom editblog={props.pvalue}
      onFormSubmit={(a)=>{
        props.dispatch(editBlog(props.pvalue.id,a));
        props.history.push('/admin');
      }}
      />
      <button className='btn btn-danger' onClick={
        ()=>{
          props.dispatch(removeBlog({id:props.pvalue.id}))
          props.history.push('/admin')
        }
      }>Delete</button>
    </div>
  )
}

const mapStateToProps=(state,props)=>{
  return{
    pvalue: state.br.find((b)=>{
      return b.id === props.match.params.id
    })
  }
}
export default connect(mapStateToProps)(EditBlog)