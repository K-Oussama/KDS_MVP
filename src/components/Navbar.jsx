import React from "react";
import {Link} from 'react-router-dom';

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md bg-blue-500">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
          🎈 KDS MVP
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/" className="text-white hover:font-bold">Home</Link></li>
            <li><Link to="/catalogs" className="text-white hover:font-bold">Catalogs</Link></li>
            <li><Link to="/sites" className="text-white hover:font-bold">Websites</Link></li>
            <li><Link to="/orders" className="text-white hover:font-bold">Orders</Link></li>
            <li><Link to="/jobs" className="text-white hover:font-bold">Jobs</Link></li>
            <li><Link to="/logs" className="text-white hover:font-bold">Logs</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
