import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
	const { token, loading } = useSelector((state) => state.auth);

	// Verify if the loading is in progress because I don’t wanna the user to access the home without being logged in
	// if the token isn’t null, he can go to the home
	if (loading) {
		return <Loading />;
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				token ? (
					children
				) : (
					<Navigate
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
