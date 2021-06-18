import React from 'react'
import { Link } from 'react-router-dom'
import image from '../imagesa/glass_image.png'


const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={image} alt="The CockTailor"/>The CockTailor
          </Link>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/Cocktails" className="navbar-item">See all our Cocktails</Link>
            </div>
            <div className="navbar-end">
              <Link to="/Game" className="navbar-item"> Test your Cocktail knowledge <span role="img">🍸</span></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar