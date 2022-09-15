import React from "react";
import argentBankLogo from "../assets/argentBankLogo.png";
import Login from "../pages/Login";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
				<NavLink to="/dashboard" className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					Sign In
				</NavLink>
			</nav>
		</>
	);
};

export default Navbar;
