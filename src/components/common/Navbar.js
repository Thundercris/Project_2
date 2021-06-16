import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span role="img" aria-label="logo" className="title">🍹</span>
          </Link>
          <div className="navbar-start">
            <Link to="/Cocktails" className="navbar-item">See all our Cocktails</Link>
          </div>
          <div className="navbar-end">
            <Link to="/Game" className="navbar-item"><span role="img">🍸</span> Guess the Cocktail! </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar