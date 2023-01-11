import { render, screen } from '@testing-library/react';
import Item from './Item';

describe('Item component', () => {
	it('render the', () => {
		const itemName = 'test item';
		const itemPrice = 7357;
		const testItem = { name: itemName, price: itemPrice };
		render(<Item item={testItem} />);
		expect(
			screen.getByRole('heading', { name: itemName }).textContent
		).toEqual(itemName);
		expect(
			screen.getByRole('heading', { name: `$${itemPrice}` }).textContent
		).toEqual(`$${itemPrice}`);
	});
});
