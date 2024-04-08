import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import axiosInstance from '../../Helpers/axiosInstance'

const initialState = {
    eventData: []
}

export const getAllEvents = createAsyncThunk('/events/get', async () => {
    try {
        const response = axiosInstance.get('/events')

        toast.promise(response,{
            loading: 'loading events' ,
            error: 'Error in loading events',
            success: 'Events Loaded Successfully'
        })

        return (await response).data.events
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {} ,
    extraReducers: (builder) => {
        builder.addCase(getAllEvents.fulfilled, (state,action) => {
            if(action.payload){
                state.eventData = [...action.payload]
            }
        })
    }
})

export default eventSlice.reducer