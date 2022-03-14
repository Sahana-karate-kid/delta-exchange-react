import axios from "axios";


const  instance = axios.create({
    baseURL: "https://api.delta.exchange/v2/products"
});

export default instance;