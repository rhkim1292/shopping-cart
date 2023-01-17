import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
	it('render the header with the correct text and image', () => {
		render(<Home />);
		expect(screen.getByRole('heading').textContent).toMatch(
			/^Randy's Insane Bike Emporium$/i
		);
		screen.getByAltText('home-img');
	});
});
