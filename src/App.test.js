// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainLinker title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainLinker/i);
    expect(titleElement).toBeInTheDocument();
});
