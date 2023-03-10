import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
	it('render the Navbar component then the Home component', () => {
		render(<App />);
		expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument();
		expect(screen.getByRole('heading').textContent).toMatch(
			/^Randy's Insane Bike Emporium$/i
		);
	});

	it('render home route by default, then render shop route when user clicks Shop link', async () => {
		render(<App />);
		expect(screen.getByRole('heading').textContent).toMatch(
			/^Randy's Insane Bike Emporium$/i
		);
		await userEvent.click(screen.getByRole('link', { name: 'Shop' }));
		expect(
			screen.getByRole('heading', { name: 'Products' }).textContent
		).toMatch(/^Products$/i);
	});

	it('render home route after being in shop route', async () => {
		render(<App />);
		await userEvent.click(screen.getByRole('link', { name: 'Shop' }));
		await userEvent.click(screen.getByRole('link', { name: 'Home' }));
		expect(screen.getByRole('heading').textContent).toMatch(
			/^Randy's Insane Bike Emporium$/i
		);
	});

	it('render cart route after user clicks cart icon', async () => {
		render(<App />);
		await userEvent.click(screen.getByTestId('cart-link'));
		expect(
			screen.getAllByRole('heading', { name: 'Cart' })[0].textContent
		).toMatch(/^Cart$/i);
	});

	it('update the cart quantity correctly when user clicks any of the add to cart buttons', async () => {
		render(<App />);
		await userEvent.click(screen.getByRole('link', { name: 'Shop' }));
		expect(screen.getByTestId('cart-qty').textContent).toMatch(/^0$/i);
		await userEvent.type(screen.getByTestId('input0'), '{backspace}');
		await userEvent.type(screen.getByTestId('input0'), '2');
		await userEvent.click(screen.getByTestId('add-to-cart-btn-0'));
		expect(screen.getByTestId('cart-qty').textContent).toMatch(/^2$/i);
	});

	it('remove items from the cart when the delete button is clicked in the Cart component', async () => {
		render(<App />);
		await userEvent.click(screen.getByRole('link', { name: 'Shop' }));
		expect(screen.getByTestId('cart-qty').textContent).toMatch(/^0$/i);
		await userEvent.type(screen.getByTestId('input0'), '{backspace}');
		await userEvent.type(screen.getByTestId('input0'), '2');
		await userEvent.click(screen.getByTestId('add-to-cart-btn-0'));
		await userEvent.click(screen.getByTestId('cart-link'));
		expect(
			screen.getByRole('heading', { name: '2023 Indian Scout Rogue' })
				.textContent
		).toMatch(/^2023 Indian Scout Rogue$/i);
		await userEvent.click(screen.getByTestId('delete-item-icon0'));
		expect(
			screen.queryByRole('heading', { name: '2023 Indian Scout Rogue' })
		).toBeNull();
	});
});
