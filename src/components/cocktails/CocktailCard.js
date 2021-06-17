import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({ idDrink, strDrink, strDrinkThumb }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/cocktails/${idDrink}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{strDrink}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={strDrinkThumb} alt={strDrink} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CocktailCard
