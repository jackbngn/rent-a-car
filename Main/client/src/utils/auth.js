// Decodes token and grabs the user info from it
import decode from 'jwt-decode';
class AuthService {
	// grad the user's data
	getProfile() {
		return decode(this.getToken());
	}
	// check if the user is logged in
	loggedIn() {
		const token = this.getToken();
		// the !!token means it is truthy (valid) and '!this' means to token is not expired
		return !!token && !this.isTokenExpired(token);
	}
	// checks the token's expiration
	istokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				return true;
			} else return false;
		} catch (err) {
			return false;
		}
	}
	// Grabs token from localStorage
	getToken() {
		return localStorage.getItem('id_token');
	}
	login(idToken) {
		// Saves token in localStorage
		localStorage.setItem('id_token', idToken);
		window.location.assign('/');
	}
	logout() {
		// Clears token and profile's data from localStorage
		localStorage.removeItem('id_token');
		// reloads page, resets the application
		window.location.assign('/');
	}
}
export default new AuthService();
