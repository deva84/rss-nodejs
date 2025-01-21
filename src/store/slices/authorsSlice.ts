import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    // @ts-ignore
     setAuthors: [],
    // @ts-ignore
     saveAuthor: [],
  },
});

// use these actions in your components / thunks
 export const { setAuthors, saveAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
