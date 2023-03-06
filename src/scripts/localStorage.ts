export function setToke(token: string) {
  localStorage.setItem('token', token);
}

export function getToken() {
  let token = localStorage.getItem('token');
  return token as string;
}

export function removeToken() {
  localStorage.removeItem('token');
}
