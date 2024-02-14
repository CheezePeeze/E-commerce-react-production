import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MultiCarousel from '../components/MultiCarousel'
import CardItem from '../components/Card'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import CircularProgressBar from '../components/CircularProgressBar'
import { getProductsFakeStoreApi, getProductsDummyApi, getProductsByQueryDummyApi, getAllProductsByQuery, getCategoriesFakeStoreApi, getCategoriesDummyApi, getCategoryByQueryFakeStoreApi, getCategoryByQueryDummyApi } from '../common/api'
import { UNIQ_ID } from '../common/constants'
import _ from 'lodash';

const Home = () => {
  const [searchItems, setSearchItems] = useState([])
  const [items, setItems] = useState([])
  const [dataForCard, setDataForCard] = useState([])
  const [dataForCarousel, setDataForCarousel] = useState([])
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    getDataForCardByCategory()
    getDataForCarouselByCategory()
    // getDataToCard()
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

  const getDataForCardByCategory = async () => {

    const { data } = await getCategoriesFakeStoreApi();
    const categoryPromises = data.slice(0, 4).map(async (category) => {
      const res = await getCategoryByQueryFakeStoreApi(category);
      return res.data.slice(0, 3);
    });

    const itemsForCardArray = await axios.all(categoryPromises);
    setDataForCard(itemsForCardArray);
  };


  const getDataForCarouselByCategory = async () => {
    const { data } = await getCategoriesDummyApi();
    const randomCategories = _.sampleSize(data, 8);
    const categoryPromises = randomCategories.map(async (category) => (await getCategoryByQueryDummyApi(category)).data.products);
    const itemsArrays = await Promise.all(categoryPromises);
    const reducedArr = itemsArrays.reduce((acc, items, i) => {
      if (i % 2 === 0) {
        acc.push([...items, ...(itemsArrays[i + 1] || [])]);
      }
      return acc;
    }, []);
    setDataForCarousel(reducedArr);
  };

  return (
    <div className='black-background black-color min-h-screen'>
      <div className='container mx-auto '>
        <Navbar />
        {isLoad ?
          <CircularProgressBar />
          : (
            <>
              <SearchBar options={searchItems} searchHandle={searchHandle} />
              {dataForCard.length > 0 && dataForCard.map((cardItems, idx) => (
                <div key={idx}>
                  <div className='grid grid-cols-3' >
                    {cardItems.map(item => (
                      <CardItem key={item.id} item={item} />
                    ))}
                  </div>
                  {dataForCarousel[idx] && <MultiCarousel items={dataForCarousel[idx]} />}
                </div>
              ))}
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