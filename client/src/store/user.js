import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userServices } from "../services"


const  initialState = {
    user:null,
    loggedIn:false,
    loader:false
}


export const fetchM = createAsyncThunk('fetch/me', async ()=>{
    const response = await userServices.fetchMe()
    return response
})



const user = createSlice({
    name:'User',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user = action.payload.user
            state.loggedIn = true
            localStorage.setItem('access-token', action.payload.accessToken)
            localStorage.setItem('refresh-token', action.payload.refreshToken)
        },
        logout: async (state)=>{
            state.user = null
            state.loggedIn = false
            await userServices.logOut()
            localStorage.removeItem('access-token')
            localStorage.removeItem('refresh-token')
        },
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchM.pending, (state)=>{
            state.loader = true
        })
        builder.addCase(fetchM.fulfilled, (state,action)=>{
            state.loader = false
            state.loggedIn = true
            state.user = action.payload
        })
        builder.addCase(fetchM.rejected, (state,action)=>{
            console.log(action.error.message)
            state.loader = false
        })
    },

})


export const {login,logout} = user.actions
export default user.reducer