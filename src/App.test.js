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
		expect(screen.getByRole('heading').textContent).toMatch(
			/^You're in the Shop$/i
		);
	});
});
