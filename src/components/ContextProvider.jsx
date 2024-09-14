import React, { createContext, useEffect, useState } from 'react'
import Home from './Home';
export const info = createContext();
const API_URL=`http://www.omdbapi.com/?apikey=a0446730&s=titanic`

function ContextProvider() {

  const [isLoading,setIsLoading]=useState(true);
  const[movie,setMovie]=useState([])
  const[isError,setIsError]=useState({show:"false",msg:""})

  const getMovies=async(url)=>{
    try{
        const res=await fetch(url);
        const data= await res.json();
        console.log(data);
        if(data.Response==="True"){
          setIsLoading(false);
          setMovie(data.search);
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
      getMovies(API_URL)
    },[])
    
  return (
    <div className='container-fluid'>
        <info.Provider value={{isLoading,movie,isError}}>
            <Home/>
        </info.Provider>
    </div>
  )
}

export default ContextProvider