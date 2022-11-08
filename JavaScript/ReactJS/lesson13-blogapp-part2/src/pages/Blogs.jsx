import React from 'react'
import { connect } from 'react-redux'
import BlogCard from '../components/BlogCard'

const Blogs = props => {
  return (
    <div className='row g-3 '>
       {props.pvalue.map((fd,i)=>(
         <BlogCard key={i} {...fd}/>
       ))}
    </div>
  )
}

const mapStateToProps =(state)=>{
  return{
    pvalue:state.br
  }
}

export default connect(mapStateToProps)(Blogs)