import { useState } from 'react'
import {SideBar, Header, SignUp, Login} from './index.js';
import { Outlet } from 'react-router-dom';


function App() {
  

  return (
    <>
      
      {/* <SignUp /> */}
      <Login/>
    </>
  )
}

export default App;
