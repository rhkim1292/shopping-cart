import { render, screen } from '@testing-library/react';
import Cart from './Cart';

describe('Home component', () => {
	it('render the header with the correct text', () => {
		render(<Cart />);
		expect(screen.getByRole('heading').textContent).toMatch(
			/^This is your Cart$/i
		);
	});
});
