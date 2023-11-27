export function mapToRange(value, oldMin, oldMax, newMin, newMax) {
  return ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}

export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function loadFromLocalStorage(key) {
  return localStorage.getItem(key);
}