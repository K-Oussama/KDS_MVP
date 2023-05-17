import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogs from './pages/Catalogs';
import Sites from './pages/Sites';
import Jobs from './pages/Jobs';
import Orders from './pages/Orders';
import Logs from './pages/Logs';


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
        <Route path="/sites" element={<Sites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </div>
    </Router>
      </div>

    </>
  )
}

export default App
