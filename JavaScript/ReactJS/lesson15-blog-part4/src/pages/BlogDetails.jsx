import React from 'react'
import { connect } from 'react-redux'
import BlogDetailItem from '../components/BlogDetailItem'

const BlogDetails = props => {
  return (
    <div><BlogDetailItem {...props.pvalue}/>
    </div>
  )
}

const mapStateToProps = (state,props)=>{
    return{
        pvalue:state.br.find((q)=>{
            return q.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(BlogDetails)