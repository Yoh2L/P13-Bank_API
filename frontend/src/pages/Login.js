import React, { useEffect, useState } from "react";
import { login } from "../store/slices/authThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		await dispatch(login({ email, password }));
		console.log(localStorage.token);
		checkToken();
	};
	const checkToken = () => {
		if (localStorage.token) {
			navigate("/dashboard");
		}
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

					<button onClick={handleLogin} className="sign-in-button">
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
};

export default Login;
