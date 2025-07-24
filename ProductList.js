import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'T-Shirt', price: 499, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Shoes', price: 1299, image: 'https://via.placeholder.com/150' },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
