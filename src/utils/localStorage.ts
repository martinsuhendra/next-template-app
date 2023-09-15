export const getFromLocalStorage = (key: string, defaultValue: string) => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key)
    return value || defaultValue
  }
  return defaultValue
}
