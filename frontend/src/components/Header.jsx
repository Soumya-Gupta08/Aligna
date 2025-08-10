import React from 'react';

import {Link, NavLink} from 'react-router-dom';


function Header() {
    return (
        <header className="shadow sticky top-0 z-50">
            <nav className="h-20 fixed left-25 w-full flex items-center gap-1 px-10 shadow-2xl shadow-darkpurple-600/20">
        
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-bold'>Aligna</h1>
                    <p className='text-sm font-light'>Where your thoughts align, where your schedule align</p>
                </div>
                
                <div className='absolute right-40 flex gap-10'>
                    <Link
                        to='/login'
                        className="transition-all px-4 py-2 w-25 flexAll button border-0.5 hover:border-2 font-medium"
                        >
                        Login
                    </Link>
                    <Link
                        to='/signup'
                        className="transition-all px-4 py-2 bg-amber-50 w-30 flexAll button border-1 text-black font-medium"
                        >
                        Get Started
                    </Link>
                </div>
             
            </nav>
        </header>
    )
}

export default Header
