import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    items:[],
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
            } else {
                const filterEd = state.items.filter((item)=> item._id !== filter._id)
                state.items = filterEd
            }

        },
    },

})

export const {addBasket} = product.actions
export default product.reducer