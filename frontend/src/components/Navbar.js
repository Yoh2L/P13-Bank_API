import React from "react";
import argentBankLogo from "../assets/argentBankLogo.png";
import { getToken } from "../utils/HelperFunctions";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/slices/authThunk";

const Navbar = ({ firstname }) => {
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Remove the token from localStorage and go back to home page
	const handleLogOut = () => {
		dispatch(signOut());
		navigate("/");
	};

	return (
		<>
			<nav className="main-nav">
				<NavLink to="/">
					<img
						className="main-nav-logo-image"
						src={argentBankLogo}
						alt="Argent Bank Logo"
					/>
				</NavLink>
				{token || getToken() ? (
					<div className="main-nav-login ">
						<div cldivss="main-nav-item">
							<i class="fa fa-user-circle"></i>
							{firstname}
						</div>
						<div class="main-nav-item" onClick={handleLogOut}>
							<i class="fa fa-sign-out"></i>
							Sign Out
						</div>
					</div>
				) : (
					<NavLink to="/login" className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
				)}
			</nav>
		</>
	);
};

export default Navbar;
