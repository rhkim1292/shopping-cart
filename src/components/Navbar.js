import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
	return (
		<ul className="navbar">
			<li>
				<NavLink to="">Home</NavLink>
			</li>
			<li>
				<NavLink to="shop">Shop</NavLink>
			</li>
		</ul>
	);
}

export default Navbar;
