import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, SIGNUP_USER } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useMutation(LOGIN_USER);
  const [signup] = useMutation(SIGNUP_USER);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      if (isLogin) {
        console.log('Attempting login');
        const { data } = await login({ variables: { username, password } });
        localStorage.setItem('token', data.login.token);
        console.log('Token set in localStorage:', data.login.token);
        window.dispatchEvent(new Event('authChange')); // Dispatch custom event
        console.log('Before navigate call');
        navigate('/'); // Navigate to home route on successful login
        console.log('After navigate call');
      } else {
        console.log('Attempting signup');
        const { data } = await signup({ variables: { username, email, password } });
        localStorage.setItem('token', data.signup.token);
        console.log('Token set in localStorage:', data.signup.token);
        window.dispatchEvent(new Event('authChange')); // Dispatch custom event
        console.log('Before navigate call');
        navigate('/'); // Navigate to home route on successful signup
        console.log('After navigate call');
      }
    } catch (err) {
      console.error('Error during authentication:', err);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </p>
      </form>
    </div>
  );
};

export default Auth;