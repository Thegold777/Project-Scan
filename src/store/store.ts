import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import histogramsSlice from "./slices/histogramsSlice";

export const store = configureStore({
  reducer: {
		user: userSlice,
		histograms: histogramsSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
