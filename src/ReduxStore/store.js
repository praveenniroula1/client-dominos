import { configureStore } from "@reduxjs/toolkit";
import deliveryDetailReducer from "./ReduxSlice/deliveryDetailsSlice";

const store = configureStore({
  reducer: {
    deliveryDetails: deliveryDetailReducer,
  },
});
export default store;
