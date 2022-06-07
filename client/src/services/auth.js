const LOCAL_STORAGE_KEY = 'auth.token';

const AuthService = {
  setToken(token) {
    localStorage.setItem(LOCAL_STORAGE_KEY, token);
  },
  getToken() {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
  },
  isAuthenticated() {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    return !!token;
  },
  logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  },
};

export default AuthService;