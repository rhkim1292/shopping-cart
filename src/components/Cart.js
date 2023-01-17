import Item from './Item';
import '../styles/Cart.css';

function Cart(props) {
	return (
		<div className="cart-container">
			<h1>Cart</h1>
			{props.cartItems.length < 1 ? (
				<h2>No items in your cart</h2>
			) : (
				props.cartItems.map((currItem, idx) => {
					return (
						<Item
							key={currItem.name}
							item={currItem}
							index={idx}
							isCartView={true}
							handleRemoveFromCart={props.handleRemoveFromCart}
						/>
					);
				})
			)}
		</div>
	);
}

export default Cart;
