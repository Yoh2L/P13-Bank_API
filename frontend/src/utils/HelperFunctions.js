//Helper functions to manage token and email in the localStorage

export const getToken = () => {
	return localStorage.getItem("token");
};
export const removeToken = () => {
	localStorage.removeItem("token");
};
export const setToken = (val) => {
	localStorage.setItem("token", val);
};
export const saveUser = (val) => {
	localStorage.setItem("user", val);
};
export const removeUser = () => {
	localStorage.removeItem("user");
};
