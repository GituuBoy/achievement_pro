// src/screens/WelcomeScreen.test.tsx
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/test-utils'; // Corrected import path
import WelcomeScreen from './WelcomeScreen';

describe('WelcomeScreen', () => {
  it('renders without crashing', () => {
    renderWithProviders(<WelcomeScreen />); // Use custom render function
    expect(screen.getByTestId('welcome-screen')).toBeInTheDocument();
  });

  it('displays the hero image with gradient overlay', () => {
    renderWithProviders(<WelcomeScreen />); // Use custom render function
    const heroContainer = screen.getByTestId('welcome-screen').querySelector('header');
    expect(heroContainer).toBeInTheDocument();
    expect(heroContainer).toHaveClass('relative');
  });

  it('displays the main heading with responsive typography', () => {
    renderWithProviders(<WelcomeScreen />); // Use custom render function
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-3xl', 'md:text-4xl');
    expect(heading).toHaveTextContent('Begin Your Achievement Journey');
  });

  it('displays the description text with responsive typography', () => {
    renderWithProviders(<WelcomeScreen />); // Use custom render function
    const description = screen.getByText('Turn your idea into a real-world, tangible project in just four weeks.');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-base', 'md:text-lg');
  });

  it('displays the Get Started button with focus states', () => {
    renderWithProviders(<WelcomeScreen />); // Use custom render function
    const button = screen.getByRole('button', { name: /get started with achievement/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('focus:ring-2', 'focus:ring-offset-2');
  });
});
