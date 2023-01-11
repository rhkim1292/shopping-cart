import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
	it('render the header with the correct text', () => {
		render(<Home />);
		expect(screen.getByRole('heading').textContent).toMatch(
			/^You are Home$/i
		);
	});
});
