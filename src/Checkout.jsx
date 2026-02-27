import { useNavigate } from 'react-router-dom';
import { useStore } from './StoreContext';

const Checkout = () => {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/summary'); // Pindah ke summary dulu buat nampilin data terakhir
    // dispatch clear_cart dilakukan di Summary atau setelah navigate
  };

  return (
    <div className="product-page">
      <h1>Your Cart</h1>
      <div className="grid">
        {state.cart.map(item => (
          <div key={item.id} className="card">
            <h4>{item.name}</h4>
            <p>Qty: {item.qty} | ${item.price * item.qty}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop: '20px', textAlign: 'right'}}>
        <h2>Total Price: ${state.totalPrice.toFixed(2)}</h2>
        <button onClick={handlePlaceOrder} style={{padding:'15px 30px', background:'var(--accent)'}}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;