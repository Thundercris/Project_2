import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Game = () => {
  const [cocktail, setCocktail] = useState('')
  const [cocktail2, setCocktail2] = useState('')
  const [cocktail3, setCocktail3] = useState('')
  const [cocktail4, setCocktail4] = useState('')
  const [answer, setAnswer] = useState('Choose your answer')
  const [hasError, setHasError] = useState(false)


  // Create array piece of state. Pass in drink name on each run of try-catch. Randomise array. Populate buttons from array.                  

  useEffect(() => {
    const getData = async () => {
      // for (i=0; i<4; i++) 
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail(cocktailData.data.drinks[0])
        // const newCocktail = [cocktailData.data.drinks[0].strDrink]
        // newArray = [...newArray, newCocktail]
        // console.log('newCocktail', newCocktail)
        // setCocktailArray(newCocktail)
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail2(cocktailData.data.drinks[0])
        // const newCocktail2 = [cocktailData.data.drinks[0].strDrink]
        // newArray = [...newArray, newCocktail2]
        // console.log('newCocktail', newCocktail)
        // setCocktailArray(newCocktail)
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail3(cocktailData.data.drinks[0])
        // const newCocktail3 = [cocktailData.data.drinks[0].strDrink]
        // newArray = [...newArray, newCocktail3]
        // setCocktailArray(newCocktail)
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail4(cocktailData.data.drinks[0])
        // const newCocktail4 = [cocktailData.data.drinks[0].strDrink]
        // newArray = [...newArray, newCocktail4]
        // setCocktailArray(newCocktail)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()

  }, [])

  const newcocktail = cocktail.strDrink
  const newcocktail2 = cocktail2.strDrink
  const newcocktail3 = cocktail3.strDrink
  const newcocktail4 = cocktail4.strDrink
  const newArray = [newcocktail, newcocktail2, newcocktail3, newcocktail4]
  newArray.sort()
  console.log(newArray)
  

  const handleClick = (event) => {
    if (newcocktail === event.target.innerText) {
      setAnswer('You are right!')
    } else {
      setAnswer(`You are wrong! It is actually a ${newcocktail}. Next question in 3, 2, 1...`) 
      // setTimeout(refreshPage(), 3000)
    }
  }

  const refreshPage = () => {
    window.location.reload()
  }



  return (
    <section className="section">
      <div className="container">
        <div className="column is-one-quarter-desktop is-one-third-tablet">
          <div className="card">
            <button onClick={handleClick}>{newArray[0]}</button>
            <button onClick={handleClick}>{newArray[1]}</button>
            <button onClick={handleClick}>{newArray[2]}</button>
            <button onClick={handleClick}>{newArray[3]}</button>
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
        <div className="result">{answer}</div>
        <div>
          <button onClick={refreshPage}>Next Question</button>
        </div>
      </div>
    </section>
  )
}

export default Game

