import { USER_LOGIN, USER_LOGOUT } from "./auth.actionType";

let initState = {
	auth: {
		isUserLoggedIn: false,
		userToken: "",
	},
};

export const authReducer = (state = initState, { type }) => {
	switch (type) {
		case USER_LOGIN: {
			return {
				...state,
				auth: {
					...state.auth,
					isUserLoggedIn: true,
					userToken: "ABCD",
				},
			};
		}
		case USER_LOGOUT: {
			return {
				...state,
				auth: {
					...state.auth,
					isUserLoggedIn: false,
					userToken: "",
				},
			};
		}
		default:
			return state;
	}
};
