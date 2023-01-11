import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar component', () => {
	it('render list and its items in navbar', () => {
		render(<Navbar />, { wrapper: Router });
		expect(screen.getAllByRole('listitem')[0].textContent).toMatch(
			/^Home$/i
		);
		expect(screen.getAllByRole('listitem')[1].textContent).toMatch(
			/^Shop$/i
		);
	});
});
