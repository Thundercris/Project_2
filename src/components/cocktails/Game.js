import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Game = () => {
  const [cocktail, setCocktail] = useState('')
  const [cocktail2, setCocktail2] = useState('')
  const [cocktail3, setCocktail3] = useState('')
  const [cocktail4, setCocktail4] = useState('')
  const [cocktailArray, setCocktailArray] = useState([])


  const [hasError, setHasError] = useState(false)


  // Create array piece of state. Pass in drink name on each run of try-catch. Randomise array. Populate buttons from array. 

  useEffect(() => {
    const getData = async () => {
      // for (i=0; i<4; i++) 
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail(cocktailData.data.drinks[0])
        const newCocktail = [...cocktailArray, [cocktailData.data.drinks[0].strDrink]]
        console.log('newCocktail', newCocktail)
        setCocktailArray(newCocktail)
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail2(cocktailData.data.drinks[0])
        const newCocktail = [...cocktailArray, [cocktailData.data.drinks[0].strDrink]]
        console.log('newCocktail', newCocktail)
        setCocktailArray(newCocktail)
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail3(cocktailData.data.drinks[0])
        const newCocktail = { ...cocktailArray, [cocktail3.strDrink]: '' }
        setCocktailArray(newCocktail)
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail4(cocktailData.data.drinks[0])
        const newCocktail = { ...cocktailArray, [cocktail4.strDrink]: '' }
        setCocktailArray(newCocktail)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])
  // console.log('cocktail 1 name', cocktail.strDrink)
  // console.log('cocktail 2 name', cocktail2.strDrink)
  // console.log('cocktail 3 name', cocktail3.strDrink)
  // console.log('cocktail 4 name', cocktail4.strDrink)
  // console.log('cocktail Array', cocktailArray)
  // console.log('cocktail image', cocktail.strDrinkThumb)
  // console.log('cocktail Ingredient 1', cocktail.strIngredient1)
  // console.log('cocktail Ingredient 2', cocktail.strIngredient2)
  // console.log('cocktail Ingredient 3', cocktail.strIngredient3)
  // console.log('cocktail Ingredient 4', cocktail.strIngredient4)
  // console.log('cocktail Ingredient 5', cocktail.strIngredient5)



  return (
    <section className="section">
      <div className="container">

        <div className="column is-one-quarter-desktop is-one-third-tablet">
          <div className="card">
            <button>{cocktail.strDrink}</button>
            <button>{cocktail2.strDrink}</button>
            <button>{cocktail3.strDrink}</button>
            <button>{cocktail4.strDrink}</button>
            <div className="card-header">
              <div className="card-header-title">What is this cocktail?</div>
            </div>
            <div className="card-image">
              <figure className="image image-is-1by1">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </figure>
            </div>
            <div className="card-content">
              <h3>Ingredients</h3>
              <h5>{cocktail.strIngredient1}</h5>
              <h5>{cocktail.strIngredient2}</h5>
              <h5>{cocktail.strIngredient3}</h5>
              <h5>{cocktail.strIngredient4}</h5>
              <h5>{cocktail.strIngredient5}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Game
