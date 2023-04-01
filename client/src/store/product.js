import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    items:JSON.parse(localStorage.getItem("ecommerceBasket")) || [],
}

const product = createSlice({
    name:'Product',
    initialState,
    reducers:{
        addBasket:(state,action)=>{
            const data = action.payload.data
            const filter = action.payload.findBasketItem
            if(!filter) {
                state.items = [
                    ...state.items,
                    data
                ]
                localStorage.setItem('ecommerceBasket', JSON.stringify(state.items))
            } else {
                const filterEd = state.items.filter((item)=> item._id !== filter._id)
                state.items = filterEd
            }

        },
        removeItemBasket:(state,action)=>{
            const filtered = state.items.filter((item)=> item._id !== action.payload)
            state.items = filtered
            localStorage.setItem('ecommerceBasket', JSON.stringify(state.items))
        },
        clearBasket:(state)=>{
            localStorage.removeItem('ecommerceBasket')
            state.items = []
        },
    },

})

export const {addBasket,removeItemBasket,clearBasket} = product.actions
export default product.reducer