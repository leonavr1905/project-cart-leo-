import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Navbar = () => {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div><strong>OBSIDIAN</strong></div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span>{state.user}</span>
        <span>Cart: {state.totalItems}</span>
        <Link to="/products" style={{color:'white'}}>Products</Link>
        <Link to="/checkout" style={{color:'white'}}>Checkout</Link>
        <button onClick={handleLogout} style={{background:'none', color:'red', border:'1px solid red', cursor:'pointer'}}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;