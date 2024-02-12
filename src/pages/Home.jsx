import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MultiCarousel from '../components/MultiCarousel'
import CardItem from '../components/Card'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Home = () => {
  const [searchItems, setSearchItems] = useState([])
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    getCategories()
    getItems()
  }, [])


  useEffect(() => {
    if (items.length) {
      setIsLoad(false)
    }

  }, [items])

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

  const filterItemByCategory = (categoryId, max = Infinity) => {
    return items.filter(item => item.category === categoryId).slice(0, max)
  }

  const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const itemsForMultipleCard = () => {
    return categories.map(category => getRandomItem(filterItemByCategory(category.id)))
  }

  const itemForSingleCard = () => {
    return getRandomItem(items)
  }

  return (
    <div className='black-background black-color min-h-screen'>
      <div className='container mx-auto '>
        <Navbar />
        {isLoad ?
          (
            <div className=' flex justify-center items-center min-h-56'>
              <CircularProgress className='' />
            </div>
          )
          : (
            <>
              <SearchBar items={searchItems} searchHandle={searchHandle} />
              {(categories.length > 1 && items.length > 1) && categories.map(category => (
                <div key={category.id}>
                  <MultiCarousel items={filterItemByCategory(category.id, 10)} title={category.title} />
                  <div className='grid grid-cols-3'>
                    <CardItem item={itemForSingleCard()} />
                    <CardItem item={itemForSingleCard()} />
                    <CardItem item={itemForSingleCard()} />
                  </div>
                </div>
              ))}
            </>
          )}
        {/* <SearchBar items={searchItems} searchHandle={searchHandle} />
        {(categories.length > 1 && items.length > 1) && categories.map(category => (
          <div key={category.id}>
            <MultiCarousel items={filterItemByCategory(category.id, 10)} title={category.title} />
            <div className='grid grid-cols-3'>
              <CardItem item={itemForSingleCard()} />
              <CardItem item={itemForSingleCard()} />
              <CardItem item={itemForSingleCard()} />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Home