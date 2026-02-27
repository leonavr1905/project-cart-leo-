import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useStore } from './context/StoreContext';
import Navbar from './components/NavBar';
import Login from './pages/login';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Summary from './pages/Summary';

// Komponen Pembatas Akses (Protected Route)
const ProtectedRoute = ({ children }) => {
  const { state } = useStore();
  // Kalau belum login, tendang balik ke login
  return state.isAuthenticated ? children : <Navigate to="/login" />;
};

const AppContent = () => {
  const location = useLocation();
  const { state } = useStore();

  return (
    <>
      {/* Navbar sembunyi di halaman login */}
      {location.pathname !== '/login' && <Navbar />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Halaman utama produk */}
        <Route path="/products" element={<Products />} />
        
        {/* Checkout cuma bisa diakses kalau udah login */}
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } />
        
        {/* Halaman setelah bayar */}
        <Route path="/summary" element={<Summary />} />

        {/* Redirect otomatis kalau path kosong */}
        <Route path="/" element={<Navigate to={state.isAuthenticated ? "/products" : "/login"} />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;