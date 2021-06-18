import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const CocktailShow = () => {
  const [cocktail, setCocktail] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log('cocktail>>>>>', data.drinks)
        setCocktail(data.drinks[0])


      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  console.log(cocktail, '<<< cocktail name')

  return (
    <section className="section">
      <div className="container">
        {cocktail ?
          <div>
            <h2 className="title has-text-centered">{cocktail.strDrink}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4"><span role="img" aria-label="wave">🍸</span> Glass Type</h4>
                <hr />
                <p>{cocktail.strGlass}</p>
                <hr />
                <h4 className="title is-4"><span role="img" aria-label="plate">🍹</span> Recipe</h4>
                <p>{cocktail.strMeasure1} {cocktail.strIngredient1}</p>
                <p>{cocktail.strMeasure2} {cocktail.strIngredient2}</p>
                <p>{cocktail.strMeasure3} {cocktail.strIngredient3}</p>
                <p>{cocktail.strMeasure4} {cocktail.strIngredient4}</p>
                <p>{cocktail.strMeasure5} {cocktail.strIngredient5}</p>
                <p>{cocktail.strMeasure6} {cocktail.strIngredient6}</p>
                <hr />
                <h4 className="title is-4"><span role="img" aria-label="globe">🗒</span> Instructions</h4>
                <hr />
                <p>{cocktail.strInstructions}</p>
                <hr />
              </div>
            </div>
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Something has gone wrong!' : 'loading...your Cocktail'}
          </h2>
        }
      </div>
    </section>
  )

}



export default CocktailShow