import { useStore } from '../context/StoreContext';

const productsData = [
  { id: 1, name: 'Obsidian Wireless Headphones', price: 129.99 },
  { id: 2, name: 'Phantom Mechanical Keyboard', price: 199.99 },
  { id: 3, name: 'Eclipse Smart Watch', price: 349.99 },
  { id: 4, name: 'Nova Desk Lamp', price: 89.99 },
  { id: 5, name: 'Aura Webcam 4K', price: 159.99 },
  { id: 6, name: 'Zen Portable Speaker', price: 74.99 },
];

const Products = () => {
  const { dispatch } = useStore();

  return (
    <div className="product-page">
      <div style={{ marginBottom: '30px', color: '#111' }}>
        <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>OUR COLLECTION</p>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>Featured Products</h1>
      </div>
      
      <div className="grid">
        {productsData.map((product) => (
          <div key={product.id} className="card">
            <div style={{ background: '#eee', height: '150px', marginBottom: '15px' }}>
              {/* Tempat Gambar */}
              <div style={{ paddingTop: '60px', color: '#999' }}>Product Image</div>
            </div>
            <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
            <p style={{ fontWeight: 'bold', color: 'var(--accent)' }}>${product.price}</p>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
              + Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;