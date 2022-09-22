/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, signOut } from "./authThunk";

const initialState = {
	token: null,
	loading: true,
	userData: {},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: {
		[signOut.fulfilled]: (state, action) => {
			state.loading = true;
			state.userData = {};
			state.token = null;
		},
		[login.pending]: (state, action) => {
			state.loading = true;
		},
		[login.fulfilled]: (state, action) => {
			const { accesToken, user } = action.payload;
			state.token = accesToken;
			state.userData = user;
			state.loading = false;
		},
		[login.rejected]: (state, action) => {
			state.loading = true;
		},
		[fetchUserData.pending]: (state, action) => {
			state.loading = true;
		},
		[fetchUserData.fulfilled]: (state, action) => {
			const { accesToken, user } = action.payload;
			state.token = accesToken;
			state.userData = user;
			state.loading = false;
		},
		[fetchUserData.rejected]: (state, action) => {
			state.loading = true;
			state.userData = {};
			state.token = null;
		},
	},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
