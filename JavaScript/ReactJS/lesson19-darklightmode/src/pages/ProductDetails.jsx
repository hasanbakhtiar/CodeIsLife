import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [apiData,setApiData] = useState([]);
    const {url}= useParams();

    useEffect(()=>{
        const fetchApi = async()=>{
            const comingData = await axios.get('https://fakestoreapi.com/products');
            setApiData(comingData.data);
        }
        fetchApi();
    },[])

    const detailItems = apiData.find(p=>p.id == url);
    

  return (
       <Container>
      {detailItems === undefined ? <h1>Loading...</h1> : (
         <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
         <div className="col-10 col-sm-8 col-lg-6">
             <img src={detailItems.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
         </div>
         <div className="col-lg-6">
             <h1 className="display-5 fw-bold lh-1 mb-3">{detailItems.title}</h1>
             <p className="lead">{detailItems.description}</p>
             <div className="d-grid gap-2 d-md-flex justify-content-md-start">
             <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
             <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
             </div>
         </div>
         </div>
      )} 
       </Container>

  )


}

export default ProductDetails