import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Cocktails = () => {
  const [cocktails, setCocktails] = useState()
  const [hasError, setHasError] = useState(false)
  const alphabetLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${id}`)
        setCocktails(response)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])


  console.log('cocktails', cocktails)
  return (
    <section className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="title is-1 has-text-centered">
            LOOK AT ALL OF THE COCKTAILS!!!! 
          </div>
          <div>
            {alphabetLetters.map(letter => {
              return <a className="letters" id={letter}>{letter}</a>
            })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cocktails