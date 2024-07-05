import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Askquestion from './pages/Home/Askquestion/Askquestion'

function AllRoutes({ slidein, handleslidein }) {
  return (
    <Routes>
      <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}/>
      <Route path='/Askquestion' element={<Askquestion/>}/>
    </Routes>
  )
}

export default AllRoutes