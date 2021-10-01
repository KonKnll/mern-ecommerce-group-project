import * as Cookies from 'js-cookie';

class CookieService {
  setItem(key, data) {
    Cookies.set(key, data);
  }

  getItem(key) {
    return Cookies.getJSON(key);
  }

  removeItem(key) {
    Cookies.remove(key);
  }
}

export default new CookieService();
