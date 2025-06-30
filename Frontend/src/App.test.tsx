// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App.tsx';

describe('App', () => {
  test('renders WelcomeScreen component', async () => {
    render(<App />);
    expect(await screen.findByTestId('welcome-screen')).toBeInTheDocument();
  });
});