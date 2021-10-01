import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';
class AuthService {
  login(username, password) {
    return axios
      .post(`${API_URL}login`, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          sessionStorage.setItem('user', JSON.stringify(response.data));
        }

        console.log('AuthService.login()', response.data);

        return response.data;
      });
  }

  logout() {
    sessionStorage.removeItem('login');
    console.log('AuthService.logout()');
    console.log(sessionStorage.getItem('login'), ' :: user meta to logout');
  }

  register(username, email, password) {
    return axios.post(`${API_URL}register`, {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    console.log(JSON.parse(sessionStorage.getItem('user')));
    return JSON.parse(sessionStorage.getItem('user'));
  }
}

export default new AuthService();
