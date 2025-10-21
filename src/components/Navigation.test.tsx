import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('renders navigation component', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    expect(screen.getByAltText('PMC Logo')).toBeInTheDocument();
    expect(screen.getAllByText('Home')).toHaveLength(2); // desktop and mobile
    expect(screen.getAllByText('About')).toHaveLength(2);
    expect(screen.getAllByText('Events')).toHaveLength(2);
    expect(screen.getAllByText('Team')).toHaveLength(2);
    expect(screen.getAllByText('Join')).toHaveLength(2);
  });
});