import React from 'react';
import logo from '../assets/Logo.png';
import {Link, NavLink} from 'react-router-dom';


function NavBar() {
    return (
        <header className="shadow absolute top-0 z-50 left-0 bg-darkpurple-300">
            <nav className="h-20 fixed w-full flex items-center gap-1 px-10 shadow-2xl shadow-darkpurple-600/20 bg-emerald-900">
        
                <div className="flexAll h-5 w-25 button py-10 left-2">
                    <img 
                    className='h-10'
                    src={logo} alt="Logo"/>
                </div>
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

export default NavBar
