import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MultiCarousel from '../components/MultiCarousel'
import Card from '../components/Card'
import axios from 'axios'
import SearchBar from '../components/SearchBar'


const Home = () => {
  const [searchItems, setSearchItems] = useState([])
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
    getItems()
  }, [])

  const searchHandle = async () => {
    try {
      const { data } = await axios.get('https://json-server-shop.adaptable.app/items');
      const newArr = data.map(item => ({ ...item, label: item.title }));
      setSearchItems(newArr);
    } catch (error) {
      console.error("Error fetching searchHandle:", error);
    }
  }

  const getCategories = async () => {
    try {
      const { data } = await axios.get('https://json-server-shop.adaptable.app/categories');
      setCategories(data);
    } catch (error) {
      console.error("Error fetching getCategories:", error);
    }
  }

  const getItems = async () => {
    try {
      const { data } = await axios.get(`https://json-server-shop.adaptable.app/items?category=${1}&category=${2}&category=${3}&category=${4}`);
      setItems(prev => [...prev, ...data]);
    } catch (error) {
      console.error("Error fetching getItems:", error);
    }
  }

  const filterItemByCategory = (categoryId, max) => {
    return items.filter(item => item.category === categoryId).slice(0, max)
  }

  return (
    <div className='container mx-auto'>
      <Navbar />
      <SearchBar items={searchItems} searchHandle={searchHandle} />

      {(categories.length > 1 && items.length > 1) && categories.map(category => (
        <Card key={category.id} items={filterItemByCategory(category.id, 4)} title={category.title} />
      ))}
      {(categories.length > 1 && items.length > 1) && categories.map(category => (
        <MultiCarousel key={category.id} items={filterItemByCategory(category.id, 10)} title={category.title} />
      ))}
    </div>
  )
}

export default Home