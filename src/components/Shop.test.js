import { render, screen } from '@testing-library/react';
import Shop from './Shop';

describe('Shop component', () => {
	it('render the header with the correct text', () => {
		render(<Shop />);
		expect(screen.getByRole('heading').textContent).toMatch(/^You're in the Shop$/i);
	});
});
