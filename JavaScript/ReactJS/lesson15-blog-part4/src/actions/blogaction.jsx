import { v4 as uuid } from 'uuid';


// Action Start
export const addBlog=({title,desc})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title:title,
    desc: desc
  }
})


export const removeBlog =({id})=>({
    type:"REMOVE_BLOG",
    id:id
})

export const editBlog =(id,update)=>({
  type:"EDIT_BLOG",
  id,
  update
})
// Action End