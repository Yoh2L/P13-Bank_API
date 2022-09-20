import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "../../utils/HelperFunctions";
import history from "../../utils/history";
import { api } from "../../api/api";
import axios from "axios";

// This action is called when the user has a token ready on the localStorage.
// If the token isn’t more available, we will just clean the locaStorage and the “global state”.
export const fetchUserData = createAsyncThunk(
	"auth/fetchUserData",
	async (_, { rejectWithValue }) => {
		try {
			const accesToken = getToken();
			api.defaults.headers.Authorization = `Bearer ${accesToken}`;
			const response = await api.get("/profile");
			return { ...response.data, accesToken };
		} catch (e) {
			removeToken();
			return rejectWithValue("");
		}
	}
);

// This action is simple, it needs a payload and the failure we will handle in the extraReducers.
export const login = createAsyncThunk("auth/login", async (payload) => {
	const response = await axios.post(api + "login", payload);
	setToken(response.data.body.token);
	history.push("/dashboard");
	return response.data;
});

// That action just removes the token on localStorage and cleans the data on the store.
export const signOut = createAsyncThunk("auth/signOut", async () => {
	removeToken();
});
