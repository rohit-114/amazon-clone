import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  qty: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty++;
      } else {
        state.items = [...state.items, { ...action.payload, qty: 1 }];
      }
    },
    increaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.qty++;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.qty === 1) {
        item.qty = 1;
      } else {
        item.qty--;
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToBasket,
  increaseQty,
  decreaseQty,
  removeFromBasket,
  clearBasket,
} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotalPrice = (state) =>
  state.basket.items.reduce(
    (total, item) => (total += item.price * item.qty),
    0
  );
export const selectTotalQty = (state) =>
  state.basket.items.reduce((total, item) => (total += item.qty), 0);

export default basketSlice.reducer;
