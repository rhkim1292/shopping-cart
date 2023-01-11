import { render, screen } from '@testing-library/react';
import Shop from './Shop';

describe('Shop component', () => {
	it('render the header with the correct text', () => {
		const testItems = [
			{ name: 'test item 1', price: 7357 },
			{ name: 'test item 2', price: 1337 },
		];

		render(<Shop shopItems={testItems} />);
		for (let i = 0; i < testItems.length; i += 1) {
			expect(
				screen.getByRole('heading', { name: testItems[i].name })
					.textContent
			).toEqual(testItems[i].name);
		}
	});
});
