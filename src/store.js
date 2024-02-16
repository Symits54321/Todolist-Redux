import { configureStore } from "@reduxjs/toolkit";

// import comments reducer function here and include it inside of the store

import { todoReducer } from "./redux/reducers/todoReducer";

export const store = configureStore({
  reducer: {
               todoReducer
  }
});