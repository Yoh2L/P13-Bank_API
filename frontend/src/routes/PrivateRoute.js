import React from "react";
import { Navigate } from "react-router-dom";

//If there's no token in localStorage, go back  to login page
const PrivateRoute = ({ children }) => {
	if (!localStorage.token) {
		return <Navigate to="/login" />;
	} else {
		return children;
	}
};

export default PrivateRoute;
