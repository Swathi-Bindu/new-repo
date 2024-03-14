import React, { useState } from 'react';
import HomePage from "./home"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const initialUserDetails = {
    username: 'swathi',
    password: 'bindu'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      if (
        formData.username === initialUserDetails.username &&
        formData.password === initialUserDetails.password
      ) {
        setIsLoggedIn(true);
      } else {
        setErrors({ login: 'Invalid username or password' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage/>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {errors.login && <p style={{ color: 'red' }}>{errors.login}</p>}
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
