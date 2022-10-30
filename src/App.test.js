import { render, screen } from '@testing-library/react';
import App from './App';

test('Initiative Dashboard', () => {
  render(<App />);
  const linkElement = screen.getByText(/Initiative Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

