import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";


function AllRoutes({ slidein, handleslidein }) {
  return (
    <Routes>
      <Route
        path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}>
      </Route>
    </Routes>
  )
}

export default AllRoutes