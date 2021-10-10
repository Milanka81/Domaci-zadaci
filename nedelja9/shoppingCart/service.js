import axios from "axios"

export const getAllProducts = () => {
    return axios.get(`http://localhost:3005/products`)
}

export const postProduct = (product) => {
    return axios.post(`http://localhost:3005/products`, product)
}
