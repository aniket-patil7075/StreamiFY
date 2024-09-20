import React, {  createContext, useEffect, useState } from 'react';
import Home from './Home';
import Navi from './Navi';
import SinglePage from './SinglePage';
export const info = createContext();
const API_URL=`http://www.omdbapi.com/?apikey=a0446730`

function ContextProvider({children}) {

  const [isLoading,setIsLoading]=useState(true);
  const[movie,setMovie]=useState([])
  const[isError,setIsError]=useState({show:"false",msg:""})
  const [query,setQuery]=useState("batman")

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
      let timerOut=setTimeout(()=>{
        getMovies(`${API_URL}&s=${query}`)
      },1000);

      return ()=>clearTimeout(timerOut)
      
    },[query])
    
  return (
    <div className='container-fluid'>
        <info.Provider value={{isLoading,movie,isError,query,setQuery}}>
        
            {children}
        </info.Provider>
    </div>
  )
}

export default ContextProvider