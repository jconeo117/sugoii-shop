import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products:[],
    productsNews:[],
    slider:[],
    productsQuery:[],
    product:{}
}

const url = 'http://localhost:3002'


export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(GetProducts.fulfilled,(state, action)=>{
            state.products = action.payload
        });
        builder.addCase(GetNewProducts.fulfilled,(state, action)=>{
            state.productsNews = action.payload
        });
        builder.addCase(GetProductName.fulfilled,(state, action)=>{
            state.productsQuery = action.payload
        });

        builder.addCase(GetSlider.fulfilled,(state,action)=>{
            state.slider = action.payload
        })

    }
})

export default productSlice.reducer

export const GetProducts = createAsyncThunk('GetProducts/products', async()=>{
   
        const res = await axios.get(`${url}/products`)
        return res.data
    
})

export const GetNewProducts = createAsyncThunk('GetNewProducts/products', async()=>{
   
        const res = await axios.get(`${url}/slider/news`)
        return res.data
    
})

export const GetProductName = createAsyncThunk('GetProductName/products', async (value)=>{
        
        const res = await axios.get(`${url}/products${value? `?name=${value}`:''}`)
        return res.data

})

export const GetSlider = createAsyncThunk('GetSlider/products', async()=>{
   
        const res = await axios.get(`${url}/slider`)
        return res.data
    
})


