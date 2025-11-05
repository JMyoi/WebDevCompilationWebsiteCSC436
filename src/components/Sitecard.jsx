
function Sitecard({title, link, description}){
    return(
        <div className = "flex flex-col rounded-lg border p-3 items-center justify-center bg-gradient-to-r from-violet-300 to-sky-300">
            <p className = "text-2xl font-serif">{title}</p>
            <p className = "my-4 mx-4 text-sm">{description}</p>
            <a href = {link} target="_blank">
                <button className = "bg-gradient-to-r hover:from-violet-400 hover:to-sky-400 cursor-pointer border p-3 rounded-full text-sm transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
                    Visit Website</button>
            </a>
            
            
        </div>
    )
}
export default Sitecard;