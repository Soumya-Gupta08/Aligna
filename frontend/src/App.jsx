import { useState } from 'react'
import {Home, SignUp, Login} from './index.js';
import { Navigate, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App;
