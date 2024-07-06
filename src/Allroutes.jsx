import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Askquestion from './pages/Askquestion/Askquestion'
import Auth from './pages/Auth/Auth'

function AllRoutes({ slidein, handleslidein }) {
  return (
    <Routes>
      <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}/>
      <Route path='/Askquestion' element={<Askquestion/>}/>
      <Route path='/Auth' element={<Auth/>}/>
    </Routes>
  )
}

export default AllRoutes