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
      .catch((err) => console.error(err))
  }, [])

  const searchHandle = async () => {
    try {
      const { data } = await axios.get('https://json-server-shop.adaptable.app/items');
      const newArr = data.map(item => ({ ...item, label: item.title }));
      setSearchItems(newArr);
    } catch (error) {
      console.error("Error fetching data:", error);
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