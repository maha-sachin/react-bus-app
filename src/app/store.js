import { configureStore } from "@reduxjs/toolkit";
import BusListReducer from "../components/busForm/customFormSlice";

export default configureStore({
  reducer: {
    busList: BusListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
