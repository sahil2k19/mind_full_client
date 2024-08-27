// "use client"
import React from 'react'
import City2Component from './City2Component'
const page = ({params}) => {
    const {city} = params
  return (
    <div>

    <City2Component city={city}/>
    
    </div>
  )
}

export default page






