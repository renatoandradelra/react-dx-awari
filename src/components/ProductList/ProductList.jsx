import { useMemo } from 'react';

function ProductList({ products = [] }) {

	const productsMap = useMemo(() => {
		const map = products.map((product) => {
			return (
				<div>
					<p>Produto</p>
					<p>Valor: R$ 10,00</p>
			</div>
			);
		});

		return map;
	}, [products]);

	return (
		<div>
			{productsMap}
		</div>
	);
}

export default ProductList;
