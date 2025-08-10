import { useState } from 'react'
import {SideBar, Header, Category} from './index.js';
import { Outlet } from 'react-router-dom';


function App() {
  

  return (
    <>
      <SideBar />
      <Header />
      <Outlet />
      
    </>
  )
}

export default App;
