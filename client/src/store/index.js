import { configureStore } from "@reduxjs/toolkit";
import user from './user'
import product from "./product";

const store = configureStore({
    reducer:{
        user,
        product
    }
})

export default store