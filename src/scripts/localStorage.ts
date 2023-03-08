export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export function getToken() {
  let token = localStorage.getItem('token');
  return token;
}

export function removeToken() {
  localStorage.removeItem('token');
}

export function isLogged() {
  return !!localStorage.getItem('token');
}
