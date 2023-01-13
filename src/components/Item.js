import '../styles/Item.css';

function Item(props) {
	return (
		<div className="item-container">
			<img
				className="item-img"
				src={props.item.imgPath}
				alt={props.item.name}
			/>
			<div className="item-details">
				<h2>{props.item.name}</h2>
				<h3>MSRP</h3>
				<h1>${props.item.price}</h1>
				<form id={`item${props.index}`} data-itemidx={`${props.index}`}>
					<input
						type="number"
						name="qty"
						className="qty-input"
						min="1"
						defaultValue="1"
						data-testid={`input${props.index}`}
						required
					/>
					<button
						type="submit"
						className="qty-submit-btn"
						data-testid={`add-to-cart-btn-${props.index}`}
					>
						Add to Cart
					</button>
				</form>
			</div>
		</div>
	);
}

export default Item;
