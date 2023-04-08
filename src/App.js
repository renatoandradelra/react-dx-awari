import ProductList from './components/ProductList';

function App() {

	const products = [
		{
			id: 0,
			title: 'PS5',
			price: 1000
		}
	];

  return (
    <div>
      <h1>Hello</h1>
			<ProductList products={products} />
    </div>
  );
}

export default App;