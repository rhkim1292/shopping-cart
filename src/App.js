import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="shop" element={<Shop />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
