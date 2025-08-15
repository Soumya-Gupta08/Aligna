import React from 'react'


function SideBar() {
    return (
        <div className="flexAll flex-col h-screen w-25 text-white absolute left-0 border-r-1 border-amber-50/5 py-2 shadow-2xl shadow-darkpurple-800 bg-emerald-950">
            

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
