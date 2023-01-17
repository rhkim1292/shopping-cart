import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import indianScoutRogue from './images/indian-scout-rogue.png';
import ninjaH2 from './images/ninja-h2.png';
import yzfR1m from './images/yzf-r1m.png';
import diavelV4 from './images/diavel-v4.png';

function App() {
	const [cart, setCart] = useState([]);
	const shopItems = [
		{
			name: '2023 Indian Scout Rogue',
			price: 14149,
			imgPath: indianScoutRogue,
		},
		{
			name: '2023 Kawasaki Ninja H2',
			price: 31500,
			imgPath: ninjaH2,
		},
		{
			name: '2023 Yamaha YZF-R1M',
			price: 26999,
			imgPath: yzfR1m,
		},
		{
			name: '2023 Ducati Diavel V4',
			price: 26695,
			imgPath: diavelV4,
		},
	];

	const handleAddToCart = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const targetItemIdx = Number(e.target.dataset.itemidx);
		const foundItem = cart.find(
			(currItem) => currItem.name === shopItems[targetItemIdx].name
		);

		if (foundItem) {
			foundItem.quantity += Number(formData.get('qty'));
			setCart([...cart]);
		} else {
			setCart(
				cart.concat([
					{
						name: shopItems[targetItemIdx].name,
						price: shopItems[targetItemIdx].price,
						imgPath: shopItems[targetItemIdx].imgPath,
						quantity: Number(formData.get('qty')),
					},
				])
			);
		}
	};

	const handleRemoveFromCart = (e) => {
		setCart(
			cart.filter((value, index) => {
				if (index !== Number(e.target.dataset.idx)) return value;
				return null;
			})
		);
	};

	const calculateTotalQty = (cart) => {
		let totalQty = 0;

		for (let i = 0; i < cart.length; i += 1) {
			totalQty += cart[i].quantity;
		}

		return totalQty;
	};

	return (
		<div className="app">
			<Router basename={`/${process.env.PUBLIC_URL}`}>
				<Navbar cartQty={calculateTotalQty(cart)} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="shop"
						element={
							<Shop
								shopItems={shopItems}
								handleAddToCart={handleAddToCart}
							/>
						}
					/>
					<Route
						path="cart"
						element={
							<Cart
								cartItems={cart}
								handleRemoveFromCart={handleRemoveFromCart}
							/>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
