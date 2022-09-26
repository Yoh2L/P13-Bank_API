import React from "react";
import argentBankLogo from "../assets/argentBankLogo.png";
import { getToken } from "../utils/HelperFunctions";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/slices/authThunk";

const Navbar = () => {
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		dispatch(signOut());
		navigate("/login");
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
					<div className="main-div-item navbar-logout" onClick={handleLogOut}>
						<i className="fa fa-user-circle"></i>
						Log out
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
