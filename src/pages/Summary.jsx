import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Summary = () => {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();
  
  // Simpan data ke state lokal sebelum keranjang dikosongkan
  // agar informasi tetap muncul di halaman ini
  const [orderInfo] = useState({
    email: state.user,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice
  });

  useEffect(() => {
    // Sesuai requirement: Setelah masuk ke summary, bersihkan keranjang
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <div className="product-page" style={{ textAlign: 'center', paddingTop: '100px' }}>
      <div style={{ 
        background: 'white', 
        padding: '50px', 
        maxWidth: '600px', 
        margin: '0 auto', 
        border: '1px solid #ddd' 
      }}>
        <div style={{ 
          background: '#27ae60', 
          color: 'white', 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 20px' 
        }}>
          ✓
        </div>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Order Confirmed!</h1>
        <p style={{ color: '#666' }}>Thank you <strong>{orderInfo.email}</strong>.</p>
        <p style={{ color: '#666' }}>Your order has been placed successfully.</p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          borderTop: '1px solid #eee', 
          borderBottom: '1px solid #eee', 
          margin: '30px 0', 
          padding: '20px 0' 
        }}>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>ITEMS</p>
            <p style={{ fontWeight: 'bold', margin: 0 }}>{orderInfo.totalItems}</p>
          </div>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>TOTAL PAID</p>
            <p style={{ fontWeight: 'bold', margin: 0 }}>${orderInfo.totalPrice.toFixed(2)}</p>
          </div>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>STATUS</p>
            <p style={{ fontWeight: 'bold', color: '#27ae60', margin: 0 }}>Processing</p>
          </div>
        </div>

        <button 
          onClick={() => navigate('/products')}
          style={{ 
            background: 'black', 
            color: 'white', 
            padding: '15px 30px', 
            border: 'none', 
            cursor: 'pointer' 
          }}
        >
          ← Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Summary;