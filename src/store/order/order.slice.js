import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (orderId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Ошибка при получении данных заказа");
      }

      const data = await response.json();

      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  },
);

const initialState = {
  orderData: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.orderData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loadingFetch = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.orderData = action.payload;
        state.loadingFetch = false;
        state.error = null;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.error.message;
      });
  },
});

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
