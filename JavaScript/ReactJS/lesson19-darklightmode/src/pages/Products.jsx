import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import axios from 'axios';

const Products = () => {
    const [apiData,setApiData] = useState([]);
    useEffect(()=>{
        const fetchApi = async()=> { 
            const comingData = await axios.get('https://fakestoreapi.com/products');
            setApiData(comingData.data);
        }
           fetchApi(); 
    },[])
  return (
    <Container>
        <h1 className='text-center my-5'>Products List</h1>
        <div className='row g-5'>
            {apiData.map((fd,i)=>{
               return <SingleCard id={fd.id} photo={fd.image} title={fd.title} desc={fd.description} key={i}/>
            })}
        </div>
    </Container>
  )
}

export default Products