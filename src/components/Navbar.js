import React from 'react'

function Navbar() {
    return (
        <div>
        <nav>
        <div className="nav-wrapper indigo darken-4">
          <a href="#" className="brand-logo left blue-text">HC STORE</a>
          <ul id="nav-mobile" className="right hide-on-lg-and-down">
            <li><a href="sass.html">Promoções</a></li>
            <li><a href="collapsible.html">Cadastro</a></li>
          </ul>
        </div>
      </nav> 
        </div>
    )
}

export default Navbar
