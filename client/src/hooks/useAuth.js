import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const useAuth = (initValue) => {
  const [isAuth, setIsAuth] = useState(initValue);

  const login = (username, password) => {
    return axios
      .post(API_URL + 'login', {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        setIsAuth(true);

        return response.data;
      });
  };
  const logout = () => {
    localStorage.removeItem('user');
    setIsAuth(false);
  };

  return [isAuth, setIsAuth, setIsAuth, login, logout];
};

export default useAuth;
