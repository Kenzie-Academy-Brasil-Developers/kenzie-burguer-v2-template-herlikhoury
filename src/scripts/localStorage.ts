export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export function getToken() {
  let token = localStorage.getItem('token');
  console.log(token);
  return token;
}

export function removeToken() {
  localStorage.removeItem('token');
}
