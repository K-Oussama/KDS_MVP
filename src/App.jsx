import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogs from './pages/Catalogs';


function App() {
  return (
    <>
    <div className='flex min-h-screen w-full flex-col'>
    <Router>
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalogs" element={<Catalogs />} />
      </Routes>
    </div>
    </Router>
      </div>

    </>
  )
}

export default App
