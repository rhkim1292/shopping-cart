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
			/^You are Home$/i
		);
	});

	it('render home route by default, then render shop route when user clicks Shop link', async () => {
		render(<App />);
		expect(screen.getByRole('heading').textContent).toMatch(
			/^You are Home$/i
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
			/^You are Home$/i
		);
	});

	it('render cart route after user clicks cart icon', async () => {
		render(<App />);
		await userEvent.click(screen.getByTestId('cart-link'));
		expect(screen.getByRole('heading').textContent).toMatch(
			/^This is your Cart$/i
		);
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
});
