import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import { Button } from 'react-bootstrap'

const App = () => {
    const [mode,setMode] = useState(localStorage.getItem('mode'))
    useEffect(()=>{
            setMode(localStorage.getItem('mode'))
    },[])
  return (
   <div id='modeId' className={mode}>
     <BrowserRouter>
        <Header />
        <Button onClick={()=>{
            if (mode === 'light') {
                setMode('dark');
                localStorage.setItem('mode','light');
            }else{
                setMode('light');
                localStorage.setItem('mode','dark');

            }
        }}>mode</Button>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:url' element={<ProductDetails/>}></Route>
        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App