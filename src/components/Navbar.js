import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
	return (
		<ul className="navbar">
			<li>
				<NavLink to="">Home</NavLink>
			</li>
			<li>
				<NavLink to="shop" id="shopLink">Shop</NavLink>
			</li>
			<li className="cart-icon">
				<div className="circle-base cart-qty-container" data-testid="cart-qty">
					{props.cartQty}
				</div>
				<NavLink to="cart" data-testid="cart-link">
					<FontAwesomeIcon icon={faCartShopping} />
				</NavLink>
			</li>
		</ul>
	);
}

export default Navbar;
