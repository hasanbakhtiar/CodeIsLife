import React from 'react'
import ProductCard from '../components/ProductCard';
import productslist from '../data/productslist';
const Products = () => {
  return (
    <div className='container'>
      <div className="row g-3">
        {productslist.map((fd,i)=>{
          return <ProductCard
            photo={fd.img}
            title={fd.name}
            category={fd.category}
            price={fd.price}
            key={i}
            addproduct={fd}
          />
        })}
      </div>
    </div>
  )
}

export default Products