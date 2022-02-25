import { USER_LOGIN, USER_LOGOUT } from "./auth.actionType";

export const authLoginAction = () => {
	return {
		type: USER_LOGIN,
	};
};

export const authLogoutAction = () => {
	return {
		type: USER_LOGOUT,
	};
};
