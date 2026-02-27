import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Checkout = () => {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // 1. Jalankan logika hapus data
    dispatch({ type: 'CLEAR_CART' });
    
    // 2. Redirect ke halaman summary (sesuai requirement poin 5)
    navigate('/summary');
  };

  return (
    <div className="checkout-page">
      <h1>Your Cart</h1>
      
      {state.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="checkout-container">
          {/* List Item */}
          <div className="cart-items">
            {state.cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name} (x{item.qty})</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Ringkasan Belanja */}
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            <p>Total Items: {state.totalItems}</p>
            <h2>Total: ${state.totalPrice.toFixed(2)}</h2>
            <button onClick={handlePlaceOrder} className="place-order-btn">
              Place Order →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;