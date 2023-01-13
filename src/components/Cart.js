import Item from './Item';
import '../styles/Cart.css';

function Cart(props) {
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
