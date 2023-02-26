// To create the apis 

import axios from "axios";

const fetchProduct = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default fetchProduct;
