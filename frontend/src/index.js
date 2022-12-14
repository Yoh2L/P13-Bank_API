import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import MainRoutes from "./routes/Routes";
import "./styles/index.css";
import store from "./store/store";
import { getToken } from "./utils/HelperFunctions";
import { fetchUserData } from "./store/slices/authThunk";
import { BrowserRouter } from "react-router-dom";

if (getToken()) {
	store.dispatch(fetchUserData());
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<MainRoutes />
		</Provider>
	</BrowserRouter>
);
