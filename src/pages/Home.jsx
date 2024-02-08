import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MultiCarousel from '../components/MultiCarousel'
import axios from 'axios'
import SearchBar from '../components/SearchBar'


const Home = () => {
  const [searchItems, setSearchItems] = useState([])
  const [randomItems, setRandomItems] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://json-server-shop.adaptable.app/items')
      .then(res => setRandomItems(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const searchHandle = async (value) => {
    const originalArr = await axios.get('https://json-server-shop.adaptable.app/items')
      .then(res => res.data)
    // const filteredArr = originalArr.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
    const test = originalArr.map(item => ({
      ...item,
      label: item.title
    }))
    setSearchItems(test)
    // console.log(originalArr);

  }

  return (
    <div className='container mx-auto'>
      <Navbar />
      <SearchBar items={searchItems} searchHandle={searchHandle} />
      {!loading && <MultiCarousel items={randomItems} />}
    </div>
  )
}

export default Home