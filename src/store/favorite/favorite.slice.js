import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { API_URL } from "../../const";

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem("favorite") || "[]"),
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
    removeFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (id) => id !== action.payload,
      );
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
