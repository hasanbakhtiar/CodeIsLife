import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    removeItem,
    updateItemQuantity,
    emptyCart
  } = useCart();
  if (isEmpty) return <div className='text-center mt-5'>
    <img src="https://www.altclasses.in/assets/img/cart.gif" alt="" />
  </div>;
  return (
<div className="container mt-5">
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Del</th>
    </tr>
  </thead>
  <tbody>
{items.map((fd,i)=>{
 return <tr>
      <th scope="row">{i+1}</th>
      <td><img width={70} src={fd.img} alt="" /></td>
      <td>{fd.name}</td>
      <td>{fd.price*fd.quantity}$</td>
      <td><button className='btn btn-primary'  onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-1</button><span className='mx-3'>{fd.quantity}</span>
      <button  onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)} className='btn btn-primary'>+1</button></td>
      <td><button onClick={()=>{removeItem(fd.id)}} className='btn btn-danger'>X</button></td>
    </tr>
})}
    
  
  </tbody>
</table>
<button className='btn btn-danger' onClick={emptyCart}>clear cart</button>
<h3 className='mt-5'>Total Price: {cartTotal}$</h3>
</div>

  )
}

export default Cart