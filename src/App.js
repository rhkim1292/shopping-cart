import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

	useEffect(() => {});

	return (
		<div className="app">
			<Router basename={`/${process.env.PUBLIC_URL}`}>
				<Navbar cartQty={0}/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="shop"
						element={<Shop shopItems={shopItems} />}
					/>
					<Route path="cart" element={<Cart />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
