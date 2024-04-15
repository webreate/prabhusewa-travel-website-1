import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the fetchProducts thunk
export const fetchmaxvisit = createAsyncThunk(
    "features/fetchmaxvisit",
    async (rejectWithValue) => {
      try {
        const res = await axios.get(
          `https://parbhusewa-travel.onrender.com/package/getmaxvisitpackage`
        );
        // console.log('redux response',res.data.packages)
        // console.log("redux response", res.data.packages);
        return res.data.packages;
      } catch (error) {
        return rejectWithValue({ error: error.message });
      }
    }
  );
  
  // initi
  const initialState={
     maxproduct:[],
     status:'idel',
     error:null
  }

  const maxvisitSlice =createSlice({
    name:'maxvisit',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
       .addCase(fetchmaxvisit.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchmaxvisit.fulfilled, (state,action) => {
        state.maxproduct = action.payload
        state.status = "succeeded";
      })
      .addCase(fetchmaxvisit.rejected, (state) => {
        state.status = "error";
      })
    }
  })

  export const { setproduct, setstatus } = maxvisitSlice.actions;

export default maxvisitSlice.reducer;
