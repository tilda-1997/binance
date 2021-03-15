import { configureStore } from "@reduxjs/toolkit";
// import {  } from "./action";
import { webMiddleware } from "./middleware";
import { rootReducer } from "./index";

const store = configureStore({
  reducer: rootReducer,
//   middleware: webMiddleware,
});

// store.dispatch(getUser());

export default store;
