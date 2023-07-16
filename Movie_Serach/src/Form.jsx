

import Movielist from "./Movielist";
import { useState } from "react";
function Form(){
  const [movie , setMovie] = useState([])
    const[data , setData] =useState("")
    


    const url =`https://www.omdbapi.com/?s=${data}&apikey=84da41de`



    
    function handleSubmit(e){
        e.preventDefault();
        foo();
       setData("")
       console.log(movie)
      
    
    }
    async function foo(){
        const response=await fetch(url);
        const data =await response.json();
        setMovie(data.Search);

      
        
    }
          

return(
        <>
        <form onSubmit={handleSubmit}>
         <input type="text" value={data} onChange={(e)=>{
            setData(e.target.value)
         }}></input>
        <button>submit</button>

        </form>

        <Movielist value={movie}></Movielist>
        
        </>
    )
}
export default Form;