import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
  const history = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    if (user.username.trim() === '' || user.password.trim() === '') {
      setErrorMessage('Please fill in all fields.');
    } else {
      axios
        .post('https://my-new-5a71.onrender.com/login', user)
        .then((res) => {
          setErrorMessage('');
          setLoginUser(res.data.user);
          history('/');
        })
        .catch((error) => {
          if (error.response) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage('An error occurred during login.');
            console.error(error);
          }
        });
    }
  };

  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Enter your Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <Link className="li-reg button" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
