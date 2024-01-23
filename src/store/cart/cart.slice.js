import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { API_URL } from "../../const";

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingRemove: false,
  error: null,
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Неудалось получить корзину");
      }

      const data = await response.json();

      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          body: JSON.stringify(productData),
        },
      });

      if (!response.ok) {
        throw new Error("Неудалось добавить товар");
      }

      const data = await response.json();

      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const removeFormCart = createAsyncThunk(
  "cart/removeFormCart",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          body: JSON.stringify(id),
        },
      });

      if (!response.ok) {
        throw new Error("Неудалось добавить товар");
      }

      const data = await response.json();

      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loadingFetch = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingFetch = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.loadingAdd = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingAdd = false;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.error.message;
      })
      .addCase(removeFormCart.pending, (state) => {
        state.loadingRemove = true;
        state.error = null;
      })
      .addCase(removeFormCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingRemove = false;
        state.error = null;
      })
      .addCase(removeFormCart.rejected, (state, action) => {
        state.loadingRemove = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
