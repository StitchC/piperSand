export function setSessionStorage(key, value) {
  value = JSON.stringify(value);
  window.sessionStorage.setItem('piperSand', value);
};

export function getSessionStorage(key) {
  let value = window.sessionStorage.getItem(key);
  return JSON.parse(value);
}
