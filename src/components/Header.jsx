import React from 'react';

function Header() {
    return(
        <div className = "flex flex-col items-center p-3  bg-stone-100">
            <h1 className = "text-4xl m-2"> CSC436 Compilation Webiste</h1>
            <p className = "m-2">A compilation of all websites created by <a target="_blank" href = "https://github.com/diabeatz96" className = "italic">Adam Kostandy</a>, used teaching modern web development</p>
        </div>
    )
}

export default Header;