import React from "react";
import argentBankLogo from "../assets/argentBankLogo.png";
import { getToken } from "../utils/HelperFunctions";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/slices/authThunk";

const Navbar = () => {
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

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
					<div className="main-div-item" onClick={() => dispatch(signOut())}>
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
