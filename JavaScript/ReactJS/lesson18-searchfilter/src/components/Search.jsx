import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
    const [query,setQuery] = useState("");
  const [data, setData] = useState([]);
  const [cdata,setCdata] = useState(data);
  const filterResult =(catItem)=>{
    const result = data.filter((fd)=>{
        return fd.category === catItem;
    })
    setCdata(result);
  }
  useEffect(() => {
    async function comingData(){
        const dataList = await axios.get("https://fakestoreapi.com/products");
        setData(dataList.data);
        setCdata(dataList.data);
    }
    comingData();
  },[]);
  return <>
  
  <input onChange={(e)=>{
    setQuery(e.target.value)
  }} type="text" />
 <div>
        <button onClick={()=>{filterResult("men's clothing")}}>Men</button>
        <button onClick={()=>{filterResult("women's clothing")}}>Woman</button>    
        </div>

  <ul>{cdata.filter(u=>u.title.toLocaleLowerCase().includes(query)).map((fd,i)=>{
   return <li key={i}>{fd.title}</li>
  })}</ul>
  </>;
};

export default Search;
