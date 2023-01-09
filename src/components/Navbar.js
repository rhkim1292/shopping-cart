import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
	return (
		<ul className="navbar">
			<li>
				<Link to="">Home</Link>
			</li>
			<li>
				<Link to="shop">Shop</Link>
			</li>
		</ul>
	);
}

export default Navbar;
