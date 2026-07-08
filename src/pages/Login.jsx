import  { useState } from 'react';
import {  useNavigate } from "react-router-dom"
import { AiFillEye ,AiFillEyeInvisible } from "react-icons/ai";
import './Login.css'; // Importing the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    
    // Handle your authentication logic here (e.g., API call)
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Please enter your details to sign in</p>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="input-group">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
        Password
      </label>
      
      {/* 1. Parent wrapper MUST be relative */}
      <div className="relative flex items-center">
        <input 
          // 2. Added pr-10 to prevent text from sliding under the icon
          className="w-full padding-y-3 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type={showPassword ? "text" : "password"} 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />
        
        {/* 3. Icon positioned absolute, centered vertically, and aligned right */}
        <div 
          onClick={() => setShowPassword(!showPassword)} 
          className="absolute right-3 cursor-pointer text-gray-500 hover:text-gray-700 select-none text-xl"
        >
          {showPassword ?  <AiFillEye /> :<AiFillEyeInvisible /> }
        </div>
      </div>
    </div>

          <div className="form-actions">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <p className="login-text cursor-pointer ">
        Don't have an account? <a className='underline mr-10 text-pink-500' onClick={() => navigate('/Singup')}> Sing Up </a></p>
      </div>
    </div>
  );
};

export default Login;