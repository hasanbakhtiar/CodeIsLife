import  { createContext, useState } from 'react'
import moviedata from '../data/moviedata';
interface AppContextInterface {
    title: string;
    rang: number;
    year: number;
  }

export const MovieContext = createContext<AppContextInterface | null>(null);;

export const MovieProvider= (props: { children: any; }) => {
    const [movies,setMovies] = useState(moviedata);
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
  )
}
