import React from 'react'
import logo from '../assets/Logo.png';

function SideBar() {
    return (
        <div className="flexAll flex-col justify-between h-screen w-25 text-white sticky left-0 top-0 border-r-1 border-amber-50/5 py-2 shadow-2xl shadow-darkpurple-800">
            <div className="flexAll h-5 w-25 button py-10 left-2">
                <img 
                className='h-10'
                src={logo} alt="Logo"/>
            </div>

            <div className='flexAll flex-col gap-10 text-3xl m-6'>
                <button className='hover:border-b-1 p-3 w-5 flexAll'>
                    <i className="fa-solid fa-moon"></i>
                </button>
                <button className='hover:border-b-1 p-3 w-5 flexAll'>
                    <i className="fa-brands fa-github"></i>
                </button>
            </div>
            
            
        </div>
        
        
    )
}

export default SideBar
