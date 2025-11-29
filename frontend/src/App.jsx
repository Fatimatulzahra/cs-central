import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import './App.css'
import Events from './pages/Events'
import Resources from './pages/Resources'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Navbar /> 
      <div className='w-full h-full absolute bg-white-200'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
