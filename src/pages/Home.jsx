import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MultiCarousel from '../components/MultiCarousel'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [searchItems, setSearchItems] = useState([])
  const [randomItems, setRandomItems] = useState([])
  useEffect(() => {
    axios.get('https://json-server-shop.adaptable.app/items')
      .then(res => setRandomItems(res.data))
  }, [])

  const searchHandle = async (value) => {
    if (value.length >= 2) {
      axios.get('https://json-server-shop.adaptable.app/items')
        .then(res => console.log(res.data))
    }
  }

  return (
    <div className='container mx-auto'>
      <Navbar />
      <SearchBar items={searchItems} searchHandle={searchHandle} />
      <MultiCarousel items={randomItems} />
    </div>
  )
}

export default Home