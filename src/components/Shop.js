import Item from './Item';
import '../styles/Shop.css';

function Shop(props) {
	return (
		<div className="shop-container">
			<h1>Products</h1>
			{props.shopItems.map((currItem, idx) => {
				return <Item key={currItem.name} item={currItem} />;
			})}
		</div>
	);
}

export default Shop;
