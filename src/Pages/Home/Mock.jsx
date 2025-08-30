import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

const cartInitialState = { items: [], totalQty: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem: (state, { payload }) => {
      const existing = state.items.find((i) => i.id === payload.id);
      if (existing) existing.qty += payload.qty || 1;
      else state.items.push({ ...payload, qty: payload.qty || 1 });
      state.totalQty = state.items.reduce((s, i) => s + i.qty, 0);
      state.totalPrice = state.items.reduce((s, i) => s + i.qty * i.price, 0);
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((i) => i.id !== payload);
      state.totalQty = state.items.reduce((s, i) => s + i.qty, 0);
      state.totalPrice = state.items.reduce((s, i) => s + i.qty * i.price, 0);
    },
    clearCart: () => cartInitialState,
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Blogs slice
const blogsInitialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ tags, search }) => {
    const blogs = await getBlogs(tags, search);
    return blogs;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: blogsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.blogs = [];
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
