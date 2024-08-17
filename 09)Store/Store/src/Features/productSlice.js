import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const rapidApiKey = "ebdaf71f5dmsh22aa38d29463840p119d5ajsn4e444afebbb6";
const rapidapiHost = "aliexpress-datahub.p.rapidapi.com";

const apiClient = axios.create({
  baseURL: `https://${rapidapiHost}`,
  headers: {
    'x-rapidapi-key' : rapidApiKey,
    'x-rapidapi-host': rapidapiHost,
  }
})

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ({ q, page}, { rejectWithValue }) => {
      try {
        const response = await apiClient.get(
          "/item_search",
          {
            params: {
              q,
              page,
              sort: 'default',
            },
          }
        );
        // console.log(response.data.result.resultList);
        
        return response.data.result.resultList;
        
      } catch (error) {
        const errorMsg =
          error.response?.data?.message || "An error occurred while fetching products.";
        return rejectWithValue(errorMsg);
      }
    }
  );
  

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;


