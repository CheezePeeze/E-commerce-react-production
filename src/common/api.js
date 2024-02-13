import axios from "axios";
import { FAKE_STORE_API, DUMMY_API } from "./constants";


const getProductsFakeStoreApi = () => {
  return axios.get(`${FAKE_STORE_API}/products`);
}


// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//       "rate": 3.9,
//       "count": 120
//   }
// }

const getProductsDummyApi = () => {
  return axios.get(`${DUMMY_API}/products`);
}

// {
//   "id": 1,
//   "title": "iPhone 9",
//   "description": "An apple mobile which is nothing like apple",
//   "price": 549,
//   "discountPercentage": 12.96,
//   "rating": 4.69,
//   "stock": 94,
//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//   "images": [
//       "https://cdn.dummyjson.com/product-images/1/1.jpg",
//       "https://cdn.dummyjson.com/product-images/1/2.jpg",
//       "https://cdn.dummyjson.com/product-images/1/3.jpg",
//       "https://cdn.dummyjson.com/product-images/1/4.jpg",
//       "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//   ]
// }

const getProductsByQueryDummyApi = (query) => {
  return axios.get(`${DUMMY_API}/products/search?q=${query}`);
}

export {
  getProductsFakeStoreApi,
  getProductsDummyApi,
  getProductsByQueryDummyApi
}