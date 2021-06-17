import React from 'react'
import { useParams } from 'react-router-dom'



const Alphabet = () => {
const { id } = useParams()

console.log(id, '<<<<id')

  return (
    <h1> Alphabet </h1>

  )


}

export default Alphabet

