import React, { useState } from "react";
import { login } from "../store/slices/authThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { saveUser } from "../utils/HelperFunctions";

const Login = () => {
	//Check if there's an email in localStorage
	const [email, setEmail] = useState(localStorage.getItem("user") || "");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//On login, send email and password to middleware
	//If remember me, set email in localStorage
	const handleLogin = async (e) => {
		e.preventDefault();
		await dispatch(login({ email, password }));
		if (rememberMe) {
			saveUser(email);
		}
		checkToken();
	};

	//If there's a token, navigate to dashboard
	const checkToken = () => {
		if (localStorage.token) {
			navigate("/dashboard");
		}
	};

	return (
		<>
			<Navbar />
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
								defaultValue={email}
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
							<input
								type="checkbox"
								id="remember-me"
								onClick={() => setRememberMe(!rememberMe)}
							/>
							<label htmlFor="remember-me">Remember me</label>
						</div>

						<button onClick={handleLogin} className="sign-in-button">
							Sign In
						</button>
					</form>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Login;
