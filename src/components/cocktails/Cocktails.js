import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CocktailCard from './CocktailCard'


const Cocktails = () => {
  const [cocktails, setCocktails] = useState()
  // const [hasError, setHasError] = useState(false)
  const alphabetLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const [cocktailsLetters, setCocktailsLetters] = useState()
  const [letter, setLetter] = useState('')
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        setCocktailsLetters(data.drink)
      } catch (err) {
        console.log(err)
      }
    getData()
  }, [])

  const handleClick = (event) => {
    setLetter(event.target.innerText)  
  }
  
  console.log()
  console.log(cocktailsLetters)

  console.log('cocktails', cocktails)
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
          <div className="columns">
            {cocktailsLetters.map(cocktail => {
              return <CocktailCard key={cocktail.idDrink} {...cocktail} />
            })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cocktails