import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hompage from './Hompage'
import Login from './Login'
import Signup from './Signup'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Hompage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
  )
}

export default MainRoutes