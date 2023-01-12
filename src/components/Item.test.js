import { render, screen } from '@testing-library/react';
import Item from './Item';
import indianScoutRogue from '../images/indian-scout-rogue.png';

describe('Item component', () => {
	it('render the image, name, and price of the item', () => {
		const itemName = 'test item';
		const itemPrice = 7357;
		const testItem = {
			name: itemName,
			price: itemPrice,
			imgPath: indianScoutRogue,
		};
		render(<Item item={testItem} />);
		screen.getByAltText(itemName);
		expect(
			screen.getByRole('heading', { name: itemName }).textContent
		).toEqual(itemName);
		expect(
			screen.getByRole('heading', { name: `$${itemPrice}` }).textContent
		).toEqual(`$${itemPrice}`);
	});
});
