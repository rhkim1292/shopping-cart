import Item from './Item';

function Shop(props) {
	return (
		<div className="shop-container">
			<h1>You're in the Shop</h1>
			{props.shopItems.map((currItem, idx) => {
				return <Item key={currItem.name} item={currItem} />;
			})}
		</div>
	);
}

export default Shop;
