import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users', {
        name,
        email,
        password,
      });
      console.log(res);
      history.push('/login');
    } catch (err) {
      const errors = JSON.parse(err.request.responseText).error.split(',');
      console.log(errors, err);
    }
  };

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-evenly">
        <form onSubmit={handleSubmit} className="shadow p-4 bg-white">
          <h2 className="mb-5 d-flex justify-content-center">Register</h2>
          <div>
            <label htmlFor="name" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="name"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control mb-3"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label mb-3">
              Password:
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div id="usernameHelp" className="form-text mb-5">
            We'll never share your personal data with anyone else.
          </div>
          <button type="submit" className="btn btn-success">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
