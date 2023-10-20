const LOCAL_STORAGE_KEYS = {
    TOKEN: 'token',
  };
  
  export const getToken = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  };
  
  export const setToken = (token) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
  };
  
  export const clearToken = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
  };