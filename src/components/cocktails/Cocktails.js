import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Cocktails = () => {
  const [cocktails, setCocktails] = useState([])
  const alphabetLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const [cocktailsLetters, setCocktailsLetters] = useState([])
  const [drinkCards, setdrinkCards] = useState()



  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(`www.thecocktaildb.com/api/json/v1/1/search.php?f=$`)
  //       setCocktails(response)
  //     } catch (err) {
  //       setHasError(true)
  //     }
  //   }
  //   getData()
  // }, [])

  const handleClick = async (event) => {
    // console.log(event.target.innerText)
    try {
      const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${event.target.innerText}`)
      setCocktailsLetters(data.drinks)
      setdrinkCards(data.drinks[0].strDrink)
    } catch (err) {
      console.log(err)
    }

  }
  console.log('drinkCards', drinkCards)
  console.log('cocktailLetters', cocktailsLetters)

  // console.log('cocktails', cocktails)
  return (
    <section className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body">
        <div className="container">
          <div>
            {alphabetLetters.map(letter => {
              return <a onClick={handleClick} className="letters" key={letter}>{letter}  </a>
            })
            }
          </div>

          <div className="columns is-multiline">
            {cocktailsLetters.map(item => {
              return <div className="column is-one-quarter-desktop is-one-third-tablet">
                <p>{item.strDrink}</p>
                <img src={item.strDrinkThumb} />
              </div>
            })}
          </div>
        </div>
      </div>
    </section >
  )
}

export default Cocktails