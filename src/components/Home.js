import '../styles/Home.css';
import bikeShop from '../images/bike-shop.jpg';

function Home() {
	return (
		<div className="home-container">
			<h1>Randy's Insane Bike Emporium</h1>
			<img className="home-img" src={bikeShop} alt="home-img" />
		</div>
	);
}

export default Home;
