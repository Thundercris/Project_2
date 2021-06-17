import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Cocktails = () => {
  const [cocktails, setCocktails] = useState()
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
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
        </div>
      </div>
    </section>

  )
}

export default Cocktails

