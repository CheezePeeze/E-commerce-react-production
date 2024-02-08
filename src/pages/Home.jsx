import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MultiCarousel from '../components/MultiCarousel'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [randomItems, setRandomItems] = useState([])
  useEffect(() => {
    axios.get('https://json-server-shop.adaptable.app/items')
      .then(res => setRandomItems(res.data))
  }, [])


  return (
    <div className='container mx-auto'>
      <Navbar />
      <SearchBar />
      <MultiCarousel items={randomItems} />
    </div>
  )
}

export default Home