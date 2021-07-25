import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div>
        <nav>
        <div className="nav-wrapper indigo darken-4">
          <Link to="/" className="brand-logo left blue-text">HC STORE</Link>
          <ul className="right hide-on-lg-and-down">
      
            <li><Link to="/clientinsert">Clientes</Link></li>
            <li><Link to="/productinsert">Podutos</Link></li>
          </ul>
        </div>
      </nav> 
    
        </div>
    )
}

export default Navbar
