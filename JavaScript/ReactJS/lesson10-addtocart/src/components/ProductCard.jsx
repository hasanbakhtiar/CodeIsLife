import React from 'react'
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({title,photo,category,price,addproduct}) => {
    const { addItem } = useCart();
    const notify = () => toast("Cart was added.");
    
  return (
    <div className='col-12 col-sm-6 col-md-4'>
        <div className="card">
        <img height={300} src={photo} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{category}</p>
            <p className="card-text">{price}$</p>
            <button onClick={()=>{notify(addItem(addproduct))}} className="btn btn-primary">Add to cart</button>
            <ToastContainer 
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </div>
        </div>

    </div>
  )
}

export default ProductCard