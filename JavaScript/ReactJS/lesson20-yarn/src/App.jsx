import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';







const Nav=()=>{
  const [mode,setMode]= useState(localStorage.getItem('mode'));
  const [newdata,setNewData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/products")
        .then(res=>setNewData(res.data))
    },[])
  return(
         <>
         
         <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
            <div className="container-fluid">
              <a className="navbar-brand" href=".">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Contact</a>
                  </li>
                </ul>
                <div className="d-flex" >
                  <button className="btn btn-outline-success" onClick={()=>{
                      if (mode === 'light') {
                        localStorage.setItem('mode','dark')
                      setMode('dark');
                      }else{
                        localStorage.setItem('mode','light')
                        setMode('light');
                      }
                  }}>Dark</button>
                </div>
              </div>
            </div>
          </nav>

          {newdata.map(item=>{
            return <li>{item.name}</li>
          })}
          {console.log(newdata)}
         </>

  )
}
const App = () => {
    const [modeData,setModeData] = useState(localStorage.getItem('mode'));

    useEffect(()=>{
        document.body.className = modeData;
    },[modeData]);

    const mode =()=>{
        if (modeData === 'dark') {
            localStorage.setItem('mode','light')
            setModeData('light');
        }else{
            localStorage.setItem('mode','dark')
            setModeData("dark");

        }
    }



    const notify = () => toast.success('Mode success', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
  return (
    <div className='mt-5 container'>
        <Nav />
        <button className='btn btn-warning' onClick={mode}>Test</button>
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"


/>
    </div>
  )
}

export default App