import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
	const [cart, setCart] = useState([]);
	const [shopItems, setShopItems] = useState([
		{
			name: 'test item',
			price: 100,
		},
	]);

	useEffect(() => {});

	return (
		<div className="app">
			<Router basename={`/${process.env.PUBLIC_URL}`}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="shop"
						element={<Shop shopItems={shopItems} />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
