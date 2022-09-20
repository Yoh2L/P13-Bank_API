import React, { useState } from "react";
import { getToken } from "../utils/HelperFunctions";
import { login } from "../store/slices/authThunk";
import { useSelector, useDispatch } from "react-redux";
import history from "../utils/history";
import Loading from "../components/Loading";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { token, loading } = useSelector((state) => state.auth);

	if (token || getToken()) {
		history.push("/dashboard");
	}

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login({ email, password }));
	};

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>

					{loading ? (
						<Loading />
					) : (
						<button onClick={handleLogin} className="sign-in-button">
							{" "}
							Sign In
						</button>
					)}
				</form>
			</section>
		</main>
	);
};

export default Login;
