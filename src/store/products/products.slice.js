import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

const initialState = {
  data: [],
  loading: false,
  error: null,
  pagination: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (param, thunkAPI) => {
    const state = thunkAPI.getState();
    const queryParams = new URLSearchParams();

    if (param) {
      for (const key in param) {
        if (Object.hasOwnProperty.call(param, key) && param[key]) {
          queryParams.append(key, param[key]);
        }
      }
    }

    const token = state.auth.accessToken;
    const url = `${API_URL}api/products?${queryParams}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === "401") {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Неудалось получить товары",
        });
      }
      throw new Error("Неудалось получить товары");
    }

    const data = await response.json();

    return data;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.pagination = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.data = action.payload;
          state.pagination = null;
        } else {
          state.data = action.payload.data;
          state.pagination = action.payload.pagination;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
