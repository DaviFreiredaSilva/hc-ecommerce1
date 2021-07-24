import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div>
        <nav>
        <div className="nav-wrapper indigo darken-4">
          <Link to="/" className="brand-logo left blue-text">HC STORE</Link>
          <ul id="dropdown1" className="right hide-on-lg-and-down">
            <li><Link to="/">Promoções</Link></li>
            <li><Link to="/clientinsert">Cadastro de clientes</Link></li>
            <li><Link to="/productinsert">Cadastro de produtos</Link></li>
          </ul>
        </div>
      </nav> 
    
        </div>
    )
}

export default Navbar
