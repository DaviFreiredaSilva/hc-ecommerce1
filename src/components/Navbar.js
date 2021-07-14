import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
        <nav>
        <div className="nav-wrapper indigo darken-4">
          <Link to="/" className="brand-logo left blue-text">Hiring Coders STORE</Link>
          <ul id="nav-mobile" className="right hide-on-lg-and-down">
            <li><Link to="/">Promoções</Link></li>
            <li><Link to="/subscribe">Cadastro</Link></li>
          </ul>
        </div>
      </nav> 
        </div>
    )
}

export default Navbar
