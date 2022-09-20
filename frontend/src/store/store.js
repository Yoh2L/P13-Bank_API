import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";

// Put reducer inside the store
export default configureStore({
	reducer: {
		auth: authReducer,
	},
});
