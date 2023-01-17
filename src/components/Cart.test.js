import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import indianScoutRogue from '../images/indian-scout-rogue.png';

describe('Cart component', () => {
	it('render the header with the correct text', () => {
		render(<Cart cartItems={[]} />);
		expect(
			screen.getAllByRole('heading', { name: 'Cart' })[0].textContent
		).toMatch(/^Cart$/i);
	});

	it('render the items in the cart', () => {
		const cart = [
			{
				name: '2023 Indian Scout Rogue',
				price: 14149,
				imgPath: indianScoutRogue,
				quantity: 1,
			},
		];
		render(<Cart cartItems={cart} />);
		screen.getByAltText(cart[0].name);
		expect(
			screen.getByRole('heading', { name: cart[0].name }).textContent
		).toMatch(/^2023 Indian Scout Rogue$/i);
		expect(
			screen.getByRole('heading', { name: 'MSRP' }).textContent
		).toMatch(/^MSRP$/i);
		expect(
			screen.getByRole('heading', { name: `$${cart[0].price}` })
				.textContent
		).toMatch(/^\$14149$/i);
		expect(
			screen.getByRole('heading', { name: `Qty: ${cart[0].quantity}` })
				.textContent
		).toMatch(/^Qty: 1$/i);
	});
});
