import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
	authLoginAction,
	authLogoutAction,
} from "../redux/AuthRedux/auth.action";

export const Navbar = () => {
	const dispatch = useDispatch();
	const loginCheck = useSelector((state) => state.auth.auth.isUserLoggedIn);

	// console.log(loginCheck);

	return (
		<div style={{ display: "flex", gap: "30px", margin: "30px" }}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			{loginCheck ? (
				<button
					onClick={() => {
						// setIsLoggedIn(!isLoggedIn);
						dispatch(authLogoutAction());
					}}
				>
					LOGOUT
				</button>
			) : (
				<button
					onClick={() => {
						// setIsLoggedIn(!isLoggedIn);
						dispatch(authLoginAction());
					}}
				>
					LOGIN
				</button>
			)}
		</div>
	);
};
