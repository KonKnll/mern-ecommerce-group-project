import { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import { FaHome, FaShoppingCart } from 'react-icons/fa';

import { UserContext } from '../context/UserContext';

const Login = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccess(false);
      setError(false);
      const { data: fetchedUser } = await axios.post('/api/users/login', {
        username,
        password,
      });

      fetchedUser.login = true;
      console.log(
        `LOGIN :: ${fetchedUser.name} ======================== `,
        fetchedUser
      );

      setUser(fetchedUser);

      localStorage.setItem(
        'user',
        JSON.stringify({
          user: fetchedUser,
        })
      );

      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const headers = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${user.token}`,
  };

  const handleProfile = async () => {
    setSuccess(false);
    setError(false);
    try {
      await axios.get('/api/users/profile', {
        headers,
      });

      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handleLogOut = () => {
    console.log(`LOGOUT :: ${user.name} ======================== `, user);
    localStorage.removeItem('user');
    setUser({});
    history.push('/');
  };

  return (
    <>
      <div className="mb-5">
        {user?.login ? (
          <div className="row">
            <div style={{ height: '65vh' }} className="col-12 p-4">
              <div className="main-box p-5 shadow">
                <span>
                  Welcome <i>{user.name}</i> to <br />
                  <b>{user.isAdmin ? 'ADMIN' : 'USER'} </b>
                  <span>'s profile.</span>
                </span>
                <br />
                <br />
                <button
                  onClick={() => history.push('/')}
                  className="btn btn-success">
                  <FaHome />
                </button>
                <button
                  onClick={() => handleProfile()}
                  className="btn btn-primary mx-2">
                  Orders
                </button>
                <Link className="btn btn-primary" to="/categories">
                  SHOP NOW!
                </Link>
                {user.isAdmin && (
                  <>
                    <Link
                      to="/admin/dashboard"
                      className="btn btn-warning mx-2">
                      Dashboard
                    </Link>
                  </>
                )}

                <button
                  onClick={() => history.push('/cart')}
                  className="btn btn-outline-danger mx-2">
                  <FaShoppingCart />
                </button>
                <button onClick={handleLogOut} className="btn btn-danger mx-2">
                  Logout
                </button>
                <br />
                <br />
                {error && <span>ERROR You cannot view your profile</span>}
                {success && <span>Your orders here...</span>}
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-evenly">
            <form onSubmit={handleSubmit} className="shadow p-4 bg-white">
              <h2 className="d-flex justify-content-center mb-5">Login</h2>
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="form-control mb-3"
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
              />
              <div id="usernameHelp" className="form-text mb-5">
                We'll never share your personal data with anyone else.
              </div>
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
