import React from 'react';

function Header() {
    return(
        <div className = "flex flex-col items-center p-3  bg-gradient-to-r from-violet-400 to-sky-400 "> 
            <h1 className = "text-5xl m-2"> CSC436 Compilation Webiste</h1> 
            <p className = "m-2">A compilation of all website created by {" "}
                <a target="_blank" href = "https://github.com/diabeatz96" className = "cursor-pointer italic hover:animate-pulse hover:text-yellow-300">
                    Adam Kostandy
                </a>
                , used for teaching Modern Web Development
            </p>
        </div>
    )
}

export default Header;