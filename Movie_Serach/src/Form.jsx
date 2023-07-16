
import { useState } from "react";
function Form(){
  
    const[data , setData] =useState("")
    const [movie , setMovie] = useState([])


    const url =`https://www.omdbapi.com/?s=${data}&apikey=84da41de`

    async function foo(){
        const response=await fetch(url);
        const data =await response.json();
        setMovie(data);
      
        
    }
          

    function handleSubmit(e){
        e.preventDefault();
        foo();

          console.log(movie.Search)
          setData("")
    
    }





    return(
        <>
        <form onSubmit={handleSubmit}>
         <input type="text" value={data} onChange={(e)=>{
            setData(e.target.value)
         }}></input>
        <button></button>

        </form>
        
        </>
    )
}
export default Form;