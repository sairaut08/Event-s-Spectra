import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './Slices/authSlice'
import clubSliceReducer from './Slices/clubSlice'

const store = configureStore({
    reducer: {
        auth: authSliceReducer ,
        clubs: clubSliceReducer
    } ,
    devTools: true
})

export default store