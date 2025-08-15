import React from 'react'
import Task from '../components/Task'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function Home() {
    return (
        <div className='flexAll flex-col h-screen w-screen relative'>
            <NavBar />
            <div className='flexAll relative w-screen h-'>
                <SideBar />
                <div className='flex flexcol left-27 top-22 bg-amber-50'>
                    <Task />
                </div>
            </div>
        </div>
    )
}

export default Home
