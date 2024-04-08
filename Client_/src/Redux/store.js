import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './Slices/authSlice'
import clubSliceReducer from './Slices/clubSlice'
import eventSliceReducer from './Slices/eventSlice'

// for persist-storage
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
// import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
    key: 'root' ,
    version: 1 ,
    storage
}

const reducer = combineReducers({
    auth: authSliceReducer ,
    clubs: clubSliceReducer,
    events: eventSliceReducer
})

const persistedReducer = persistReducer(persistConfig,reducer)


const store = configureStore({
    reducer: persistedReducer,
    devTools: true
})


// NORMAL STORE BELOW

// const store = configureStore({
//     reducer: {
//         auth: authSliceReducer ,
//         clubs: clubSliceReducer
//     } ,
//     devTools: true
// })

export default store