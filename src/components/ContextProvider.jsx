import React, { createContext, useEffect } from 'react'
import Home from './Home';
export const info = createContext();
const API_URL=`http://www.omdbapi.com/?apikey=a0446730&s=titanic`

function ContextProvider() {

  const getMovies=async(url)=>{
    try{
        const res=await fetch(url);
        const data= await res.json();
        console.log(data);
    }catch(error){
      console.log(error)
    }
  }

    useEffect(()=>{
      getMovies(API_URL)
    },[])
    const msg="Aniket";
  return (
    <div className='container-fluid'>
        <info.Provider value={msg}>
            <Home/>
        </info.Provider>
    </div>
  )
}

export default ContextProvider