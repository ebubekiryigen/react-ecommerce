import axios from 'axios'

//user
export const postOrder = async(input) => {
    let config = {
        headers: {
            Authorization: localStorage.getItem('access-token'),
        }
    };
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_API}order`, input,config);
    return data;
}

//admin
export const getOrders = async (inut) => {
    let config = {
        headers: {
            Authorization: localStorage.getItem('access-token'),
        }
    };
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API}order`,config);

    return data
}