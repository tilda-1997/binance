import { configureStore } from "@reduxjs/toolkit";
import { webMiddleware } from "./middleware";
import { rootReducer } from "./index";
import { buildConnection } from "./action";

const store = configureStore({
  reducer: rootReducer,
  middleware: [webMiddleware],
});

store.dispatch(buildConnection());

export default store;
