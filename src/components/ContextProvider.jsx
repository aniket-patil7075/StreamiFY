import React, { createContext, useEffect, useState } from 'react';
import Home from './Home';
export const info = createContext();
const API_URL=`http://www.omdbapi.com/?apikey=a0446730`

function ContextProvider() {

  const [isLoading,setIsLoading]=useState(true);
  const[movie,setMovie]=useState([])
  const[isError,setIsError]=useState({show:"false",msg:""})
  const [query,setQuery]=useState("avenger")

  const getMovies=async(url)=>{
    try{
        const res=await fetch(url);
        const data= await res.json();
        console.log(data);
        if(data.Response==="True"){
          setIsLoading(false);
          setMovie(data.Search);
        }else{
          setIsError({
            show:true,
            msg:data.error
          })
        }

    }catch(error){
      console.log(error)
    }
  }

    useEffect(()=>{
      getMovies(`${API_URL}&s=${query}`)
    },[query])
    
  return (
    <div className='container-fluid'>
        <info.Provider value={{isLoading,movie,isError,query,setQuery}}>
            <Home/>
        </info.Provider>
    </div>
  )
}

export default ContextProvider