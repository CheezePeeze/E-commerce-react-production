import axios from "axios";
import { FAKE_STORE_API, DUMMY_API } from "./constants";


const getProductsFakeStoreApi = () => {
  return axios.get(`${FAKE_STORE_API}/products`);
}

const getProductsDummyApi = () => {
  return axios.get(`${DUMMY_API}/products`);
}

const getProductsByQueryDummyApi = (query) => {
  return axios.get(`${DUMMY_API}/products/search?q=${query}`);
}

const getAllProductsByQuery = (query) => {
  return axios.all([getProductsFakeStoreApi(), getProductsByQueryDummyApi(query)])
}

export {
  getProductsFakeStoreApi,
  getProductsDummyApi,
  getProductsByQueryDummyApi,
  getAllProductsByQuery
}