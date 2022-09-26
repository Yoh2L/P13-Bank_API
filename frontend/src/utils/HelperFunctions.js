export const getToken = () => {
	return localStorage.getItem("token");
};
export const removeToken = () => {
	localStorage.removeItem("token");
};
export const setToken = (val) => {
	localStorage.setItem("token", val);
};
export const setUser = (val) => {
	sessionStorage.setItem("user", val);
};
export const removeUser = () => {
	sessionStorage.removeItem("user");
};
