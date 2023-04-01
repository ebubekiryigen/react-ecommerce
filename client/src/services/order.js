import axios from 'axios'

export const postOrder = async(input) => {
    let config = {
        headers: {
            Authorization: localStorage.getItem('access-token'),
        }
    }
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_API}order`, input,config)
    return data
}
