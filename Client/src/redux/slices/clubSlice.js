import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiosInstance";

const initialState = {
    clubData:[]
}

export const getAllClubs = createAsyncThunk('/clubs/get',async()=>{
    try {
        const response = axiosInstance.get('/clubs');
        toast.promise(response,{
            loading:"loading club Data....",
            success:"Club Loaded Successfully",
            error:"Failed to get clubs"
        });
        return (await response).data.club;
    } catch (error) {
        toast.error(error?.response?.data.message);
    }
})
const clubSlice = createSlice({
    name:"clubs",
    initialState,
    reducers:{},
    extraReducers :(builder)=>{
            builder.addCase(getAllClubs.fulfilled,(state,action)=>{
                if(action.payload){
                    console.log(action.payload);
                    state.clubData = [...action.payload]
                  
                }
            })
    }
});

export default clubSlice.reducer;