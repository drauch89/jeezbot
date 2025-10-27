import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders and sends a message', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Type a message/i);
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // UI should show the user message
    expect(await screen.findByText(/hello/i)).toBeInTheDocument();
  }, 10000);
});
