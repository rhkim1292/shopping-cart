function Item(props) {
	return (
		<div className="item-container">
			<h2>{props.item.name}</h2>
			<h2>Price: {props.item.price}</h2>
		</div>
	);
}

export default Item;
