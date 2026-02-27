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
    <div className="product-grid">
      {productsData.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
            + Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};