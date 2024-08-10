import { fetchallusers } from './action/users';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Component/Navbar/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './Allroutes';
import { useDispatch } from 'react-redux';

function App() {
  const [slidein, setslidein]=useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchallusers());
  },[dispatch])

  useEffect(()=>{
    if(window.innerWidth<=768){
      setslidein(false)
    }
  },[])
  const handleslidein=()=>{
    if(window.innerWidth<=768){
      setslidein((state)=>!state);
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar handleslidein={handleslidein}/>
        <AllRoutes slidein={slidein} handleslidein={handleslidein}/>
      </Router>
    </div>
  );
}

export default App;
