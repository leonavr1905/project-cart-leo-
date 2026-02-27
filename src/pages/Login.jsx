import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { dispatch } = useStore();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (pass.length >= 4) {
      dispatch({ type: 'LOGIN', payload: email });
      navigate('/products');
    }
  };

  return (
    <div className="login-screen">
      <div className="login-box">
        <h3>WELCOME BACK</h3>
        <h1>Sign in to your account</h1>
        <form onSubmit={handleLogin}>
          <label>EMAIL ADDRESS</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required />
          <label>PASSWORD</label>
          <input type="password" onChange={(e) => setPass(e.target.value)} required />
          <button type="submit">Sign In →</button>
        </form>
      </div>
    </div>
  );
};

export default Login;