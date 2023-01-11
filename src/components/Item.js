import '../styles/Item.css';

function Item(props) {
	return (
		<div className="item-container">
			<h2>{props.item.name}</h2>
			<h1>${props.item.price}</h1>
		</div>
	);
}

export default Item;
