import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MultiCarousel from '../components/MultiCarousel'
import CardItem from '../components/Card'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import CircularProgressBar from '../components/CircularProgressBar'
import { getProductsFakeStoreApi, getProductsDummyApi, getProductsByQueryDummyApi, getAllProductsByQuery } from '../common/api'
import { UNIQ_ID } from '../common/constants'


const Home = () => {
  const [searchItems, setSearchItems] = useState([])
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    getCategories()
    getItems()
  }, [])
  // console.log(import.meta.env.VITE_SPOON_KEY);


  useEffect(() => {
    if (items.length) {
      setIsLoad(false)
    }
  }, [items])

  const searchHandle = (e) => {
    getAllProductsByQuery(e.target.value)
      .then((res) => {
        setSearchItems([
          ...res[0].data
            .filter(item => item.title.toLowerCase().includes(e.target.value))
            .map(item => ({
              ...item,
              id: item.id + UNIQ_ID,
              rating: item.rating.rate,
              stock: item.rating.count,
              thumbnail: item.image,
              images: [item.image],
              shop: 1
            })),
          ...res[1].data.products.map(item => ({
            ...item,
            shop: 2
          }))
        ])
      })
  }

  const getItems = () => {
    setItems(() => [1, 2])
    // getProductsFakeStoreApi().then(res => {
    //   setItems(prev => [...prev, ...res.data.map(item => ({
    //     ...item,
    //     id: item.id + UNIQ_ID,
    //     rating: item.rating.rate,
    //     stock: item.rating.count,
    //     thumbnail: item.image,
    //     images: [item.image],
    //     shop: 1
    //   }))])
    // })

    // getProductsDummyApi().then(res => {
    //   setItems(prev => [...prev, ...res.data.products.map(item => ({
    //     ...item,
    //     shop: 2
    //   }))])
    // })
  }



  // console.log(items);

  const getItemsByCategory = () => {

  }

  const getCategories = () => {

  }


  // const filterItemByCategory = (categoryId, max = Infinity) => {
  //   return items.filter(item => item.category === categoryId).slice(0, max)
  // }

  // const getRandomItem = (arr) => {
  //   return arr[Math.floor(Math.random() * arr.length)]
  // }

  // const itemForSingleCard = () => {
  //   return getRandomItem(items)
  // }

  return (
    <div className='black-background black-color min-h-screen'>
      <div className='container mx-auto '>
        <Navbar />
        {isLoad ?
          <CircularProgressBar />
          : (
            <>
              <SearchBar options={searchItems} searchHandle={searchHandle} />
              {/* <MultiCarousel items={filterItemByCategory(category.id, 10)} title={category.title} /> */}

              {/* {(categories.length > 1 && items.length > 1) && categories.map(category => (
                <div key={category.id}>
                  <MultiCarousel items={filterItemByCategory(category.id, 10)} title={category.title} />
                  <div className='grid grid-cols-3'>
                    <CardItem item={itemForSingleCard()} />
                    <CardItem item={itemForSingleCard()} />
                    <CardItem item={itemForSingleCard()} />
                  </div>
                </div>
              ))} */}
            </>
          )}
      </div>
    </div>
  )
}

export default Home