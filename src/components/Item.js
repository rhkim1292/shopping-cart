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
				{/* <form>
					<input type="text"/>
				</form> */}
			</div>
		</div>
	);
}

export default Item;
