import axios from 'axios'

export const fetchPorductList = async({pageParam = 0}) => {
    const {data} = await axios.get(process.env.REACT_APP_PRODUCT_API + '?page=' + pageParam)
    return data
}

export const fetchPorductDetail = async(id) => {
    const {data} = await axios.get(process.env.REACT_APP_PRODUCT_API + id)
    return data
}