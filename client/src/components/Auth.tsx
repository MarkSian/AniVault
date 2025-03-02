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
    <div
      className="flex items-start justify-center min-h-screen bg-cover bg-center pt-12" 
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp3971576.jpg')" // Background image
      }}
    >
      <div className="card w-96 bg-gray-900 bg-opacity-80 text-white shadow-xl p-6 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-primary">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Username Input */}
          <div>
            <label className="label text-gray-300" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input input-bordered w-full bg-gray-700 text-white"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input (only for sign-up) */}
          {!isLogin && (
            <div>
              <label className="label text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered w-full bg-gray-700 text-white"
                placeholder="Enter your email"
              />
            </div>
          )}

          {/* Password Input */}
          <div>
            <label className="label text-gray-300" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full bg-gray-700 text-white"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Between Login & Sign Up */}
        <p
          className="text-center text-sm text-gray-400 mt-4 cursor-pointer hover:text-primary"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Auth;