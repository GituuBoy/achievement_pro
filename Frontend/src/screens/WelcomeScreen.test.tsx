// src/screens/WelcomeScreen.test.tsx
import { render, screen } from '@testing-library/react';
import WelcomeScreen from './WelcomeScreen';
import { describe, it, expect, vi } from 'vitest';

// Mock the image import to prevent errors in the test environment
vi.mock('/src/assets/images/welcome-hero.jpg', () => {
  return {
    default: 'test-file-stub',
  };
});

describe('WelcomeScreen', () => {
  it('renders the main headline', () => {
    render(<WelcomeScreen />);

    // Check if the heading text is in the document
    const headline = screen.getByRole('heading', {
      name: /Begin Your Achievement Journey/i
    });
    expect(headline).toBeInTheDocument();
  });

  it('renders the "Get Started" button', () => {
    render(<WelcomeScreen />);

    // Check if the button is in the document
    const button = screen.getByRole('button', { name: /Get Started/i });
    expect(button).toBeInTheDocument();
  });
});