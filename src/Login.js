import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from './StoreContext';
import './Login.css'; // File CSS terpisah

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useStore();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password.length >= 4) {
      dispatch({ type: 'LOGIN', payload: email });
      navigate('/products');
    } else {
      alert("Email dan password (min 4 karakter) wajib diisi!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <p className="welcome-text">WELCOME BACK</p>
        <h1>Sign in to your account</h1>
        <form onSubmit={handleLogin}>
          <label>EMAIL ADDRESS</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          <label>PASSWORD</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          <button type="submit">Sign In →</button>
        </form>
      </div>
    </div>
  );
};

export default Login;