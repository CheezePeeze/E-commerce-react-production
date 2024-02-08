import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MultiCarousel from '../components/MultiCarousel'
import axios from 'axios'

const Home = () => {
  const [randomItems, setRandomItems] = useState([])
  useEffect(() => {
    axios.get('https://json-server-shop.adaptable.app/items')
      .then(res => setRandomItems(res.data))
    // .then(res => console.log(res.data))


  }, [])
  return (
    <>
      <Navbar />
      <MultiCarousel items={randomItems} />
    </>
  )
}

export default Home