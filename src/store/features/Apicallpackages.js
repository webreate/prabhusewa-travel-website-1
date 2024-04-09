import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the fetchProducts thunk
export const fetchProducts = createAsyncThunk(
  "features/fetchProducts",
  async (rejectWithValue) => {
    try {
      const res = await axios.get(
        `https://prabhusewa-travel.fly.dev/package/getpackageweb?type=RELIGIOUS TRAVEL`
      );
      // console.log("redux response", res.data.packages);
      return res.data.packages;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

// Define the initial state
const initialState = {
  productData: [],
  status: "idle", // or 'loading', 'succeeded', 'failed'
  error: null,
};

// Create the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setproduct, setstatus } = productSlice.actions;

export default productSlice.reducer;
