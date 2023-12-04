export function mapToRange(value, oldMin, oldMax, newMin, newMax) {
  return ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}

export function saveToLocalStorage(key, value) {
  const json = JSON.stringify(value)
  localStorage.setItem(key, json);
}

export function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export const LOCAL_STORAGE_KEY = 'nearby-place-names-for-spinner'