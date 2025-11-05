import React from 'react';

function SiteCard({title, link, description}){
    return(
        <div className = "flex flex-col rounded-lg border p-3 items-center justify-center bg-zinc-50">
            <p className = "text-lg">{title}</p>
            <p className = "my-4 mx-4 text-sm">{description}</p>
            <a href = {link} target="_blank">
                <button className = "hover:bg-gray-200 border p-3 rounded-full text-sm">Visit Website</button>
            </a>
            
            
        </div>
    )
}
export default SiteCard;