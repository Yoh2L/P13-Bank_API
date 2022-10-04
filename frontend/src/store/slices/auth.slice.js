/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, signOut, updateUserData } from "./authThunk";

const initialState = {
	token: null,
	loading: true,
	userData: {},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	/*
	extraReducers assign datas to store depending of status :
	pending, fulfilled or rejected 
	*/
	extraReducers: {
		[signOut.fulfilled]: (state) => {
			state.loading = true;
			state.userData = {};
			state.token = null;
		},
		[login.pending]: (state) => {
			state.loading = true;
		},
		[login.fulfilled]: (state, action) => {
			const { accesToken } = action.payload;
			state.token = accesToken;
			state.userData = "";
			state.loading = false;
		},
		[login.rejected]: (state) => {
			state.loading = true;
		},
		[fetchUserData.fulfilled]: (state, action) => {
			const { accesToken, userData } = action.payload;
			state.token = accesToken;
			state.userData = userData;
			state.loading = false;
		},
		[fetchUserData.rejected]: (state) => {
			state.loading = true;
			state.userData = {};
			state.token = null;
		},
		[updateUserData.pending]: (state) => {
			state.loading = true;
		},
		[updateUserData.fulfilled]: (state, action) => {
			state.token = action.payload.accesToken;
			state.userData = action.payload.userData;
			state.loading = false;
		},
		[updateUserData.rejected]: (state, action) => {
			const accesToken = action.payload;
			state.token = accesToken;
			state.userData = {};
			state.loading = false;
		},
	},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
