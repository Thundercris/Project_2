import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Game = () => {
  const [cocktail, setCocktail] = useState('')
  const [cocktail2, setCocktail2] = useState('')
  const [cocktail3, setCocktail3] = useState('')
  const [cocktail4, setCocktail4] = useState('')
  const [answer, setAnswer] = useState('')
  const [hasError, setHasError] = useState(false)
                 

  useEffect(() => {
    const getData = async () => {
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail(cocktailData.data.drinks[0])
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail2(cocktailData.data.drinks[0])
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail3(cocktailData.data.drinks[0])
      } catch (err) {
        setHasError(true)
      }
      try {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail4(cocktailData.data.drinks[0])
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
  const buttonSelect = document.querySelectorAll('button')

  const disableButtons = () => {
    return buttonSelect.forEach(button =>
      button.disabled = true)
  }


  const handleClick = (event) => {
    if (newcocktail === event.target.innerText) {
      setAnswer('You are right!')
    } else {
      setAnswer(`You are wrong! It is actually a ${newcocktail}.`)
    }
    return disableButtons()
  }

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <section className="section image_game">
      <div className="container">
        <div className="columns">
          <div className="column is-quarter"></div>
          <div className="column is-quarter  text-is-centered">
            <div className="card">
              <div className="card-header">
                <div className="card title">What is this cocktail?</div>
              </div>
              <div className="card-image">
                <figure className="image image-is-1by1">
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </figure>
              </div>
              <div className="card-content">
                <h3 className="subtitle">Ingredients</h3>
                <h5>{cocktail.strIngredient1}</h5>
                <h5>{cocktail.strIngredient2}</h5>
                <h5>{cocktail.strIngredient3}</h5>
                <h5>{cocktail.strIngredient4}</h5>
                <h5>{cocktail.strIngredient5}</h5>
              </div>
            </div>
          </div>
          <div className="column2 is-quarter">
            <div className="buttons-container">
              <div className="buttons">
                <h2 className="question subtitle text-is-centered">Choose your answer</h2>
                <button className="button is-primary is-rounded is-focused" onClick={handleClick}>{newArray[0]}</button>
                <button className="button is-primary is-rounded is-focused" onClick={handleClick}>{newArray[1]}</button>
                <button className="button is-primary is-rounded is-focused" onClick={handleClick}>{newArray[2]}</button>
                <button className="button is-primary is-rounded is-focused" onClick={handleClick}>{newArray[3]}</button>
                <div className="result-container">
                  <h3 className="result subtitle text-is-centered">{answer}</h3>
                  <a className="button is-danger is-rounded" onClick={refreshPage}>Next Question</a>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-quarter"></div>
        </div>
      </div>
    </section>
  )
}

export default Game

