import axios from 'axios'


axios.interceptors.request.use( function (config) {
    const {origin} = new URL(config.url)
    const allowedOrigins = [process.env.REACT_APP_USER_API]
    const token = localStorage.getItem('access-token')
    if(allowedOrigins.includes(origin)) {
        config.headers.Authorization = token
    }
    return config
    }, function (error) {
        return Promise.reject(error)
    }
)

export const registerUser = async(input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_USER_API}register`, input)
    return data
}

export const fetchMe = async() => {
    let config = {
        headers: {
            Authorization: localStorage.getItem('access-token'),
        }
    }
    const {data} = await axios.get(`${process.env.REACT_APP_USER_API}me`,config)
    return data
}


export const logOut = async () =>{
    const {data} = await axios.post(`${process.env.REACT_APP_USER_API}logout`, {
        refresh_token: localStorage.getItem("refresh-token")
    })
    return data
}

export const login = async(input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_USER_API}login`, input)
    return data
}
