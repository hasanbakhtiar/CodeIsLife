import React, { Component } from 'react'

class BlogFrom extends Component {
    constructor(){
        super();
        this.state={
            formtitle:"",
            formdesc:"",
            err:" ",
            style:"",
        }
    }

    blogSubmit=(e)=>{
        e.preventDefault();
        if (!this.state.formtitle || !this.state.formdesc) {
            this.setState({err:"please, fill out this filed",style:'alert-danger'});
        }else{
            this.setState({err:" ",style:' '})
            this.props.onFormSubmit({
                title:this.state.formtitle,
                desc:this.state.formdesc,
            })
        }
    }
  render() {
    return (
      <div className='d-flex align-items-center justify-content-center flex-column'>
       {this.state.err && (<p className={`alert ${this.state.style}`}>{this.state.err}</p>)}
            <form className='col-6 mt-5' onSubmit={this.blogSubmit}>
            <div className="mb-3">
                <label  className="form-label">Add title</label>
                <input onChange={(e)=>{
                    const formtitle = e.target.value;
                    this.setState(()=>({formtitle}))
                }} type="text" className="form-control"   />
            </div>
            <div className="mb-3">
                <label  className="form-label">Add description</label>
                <input onChange={(e)=>{
                    const formdesc = e.target.value;
                    this.setState(()=>({formdesc}))
                }} type="text" className="form-control"  />
            </div>
           
            <button type="submit" className="btn btn-primary">Add</button>
            </form>

      </div>
    )
  }
}

export default BlogFrom