import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StepIndicator from './StepIndicator';

describe('StepIndicator', () => {
  it('renders the correct number of steps', () => {
    render(<StepIndicator totalSteps={5} currentStep={1} />);
    const steps = screen.getAllByTestId('step-circle');
    expect(steps).toHaveLength(5);
  });

  it('highlights the current step correctly', () => {
    render(<StepIndicator totalSteps={5} currentStep={3} />);
    const steps = screen.getAllByTestId('step-circle');
    expect(steps[2]).toHaveClass('bg-blue-500');
    expect(steps[2]).not.toHaveClass('bg-gray-300');
  });

  it('renders the step labels if provided', () => {
    const labels = ['Step 1', 'Step 2', 'Step 3'];
    render(<StepIndicator totalSteps={3} currentStep={1} labels={labels} />);
    labels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});