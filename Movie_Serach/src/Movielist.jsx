
function Movielist ({value}){
    return (
        value.map((t)=>{
            return(
                <>
                <img src={t.Poster}></img>
                <h1>{t.Title}</h1>
                
                </>
            )
        })
    )
}
export default Movielist;