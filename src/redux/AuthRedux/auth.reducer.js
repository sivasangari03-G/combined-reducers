import { getValue, setValue } from "../../utils/localStorage";
import { USER_LOGIN, USER_LOGOUT } from "./auth.actionType";

let initState = {
	auth: {
		isUserLoggedIn: (getValue("userToken") !== "") ? true : false,
		userToken: getValue("userToken"),
	},
};

export const authReducer = (state = initState, { type }) => {
	switch (type) {
		case USER_LOGIN: {
			let userToken = "ABCD";
			setValue("userToken", userToken);
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
			setValue("userToken", "");
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
