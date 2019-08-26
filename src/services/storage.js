const TOKEN_KEY = 'access_token';

export const TokenService = {
  saveToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },
  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  },
  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  }
}
