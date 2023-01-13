import Item from './Item';
import '../styles/Shop.css';
import { useEffect } from 'react';

function Shop(props) {
	useEffect(() => {
		for (let i = 0; i < props.shopItems.length; i += 1) {
			const currItemElement = document.querySelector(`form#item${i}`);
			if (currItemElement) {
				currItemElement.removeEventListener(
					'submit',
					props.handleAddToCart
				);
				currItemElement.addEventListener(
					'submit',
					props.handleAddToCart
				);
			}
		}

		return () => {
			for (let i = 0; i < props.shopItems.length; i += 1) {
				const currItemElement = document.querySelector(`form#item${i}`);
				if (currItemElement) {
					currItemElement.removeEventListener(
						'submit',
						props.handleAddToCart
					);
				}
			}
		};
	});
	return (
		<div className="shop-container">
			<h1>Products</h1>
			{props.shopItems.map((currItem, idx) => {
				return <Item key={currItem.name} item={currItem} index={idx} />;
			})}
		</div>
	);
}

export default Shop;
