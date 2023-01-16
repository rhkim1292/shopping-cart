import Item from './Item';
import '../styles/Cart.css';
import { useEffect } from 'react';

function Cart(props) {
	useEffect(() => {
		console.log('rendering cart');
		for (let i = 0; i < props.cartItems.length; i += 1) {
			const currItemElement = document.querySelector(`#deleteIcon${i}`);
			if (currItemElement) {
				currItemElement.removeEventListener(
					'click',
					props.handleRemoveFromCart
				);
				currItemElement.addEventListener(
					'click',
					props.handleRemoveFromCart
				);
			}
		}

		return () => {
			for (let i = 0; i < props.cartItems.length; i += 1) {
				const currItemElement = document.querySelector(
					`#deleteIcon${i}`
				);
				if (currItemElement) {
					currItemElement.removeEventListener(
						'click',
						props.handleRemoveFromCart
					);
				}
			}
		};
	});
	
	return (
		<div className="cart-container">
			<h1>Cart</h1>
			{props.cartItems.map((currItem, idx) => {
				return (
					<Item
						key={currItem.name}
						item={currItem}
						index={idx}
						isCartView={true}
					/>
				);
			})}
		</div>
	);
}

export default Cart;
