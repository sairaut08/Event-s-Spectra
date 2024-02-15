import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice';
import clubReducer from './slices/clubSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        clubs : clubReducer
       

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;