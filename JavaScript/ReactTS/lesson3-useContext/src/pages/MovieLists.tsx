import React from 'react'
import { useContext } from 'react'
import SingleCard from '../components/SingleCard'
import { MovieContext } from '../context/MovieContext'

const MovieLists = () => {
    const [movies,setMovies] = useContext(MovieContext);
  return (
    <div className='row'>
        {movies.map((fd:any)=>{
           return <SingleCard title={fd.title} rang={fd.rang} year={fd.year}/>

        })}
    </div>
  )
}

export default MovieLists