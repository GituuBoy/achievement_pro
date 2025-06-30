import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders the input with the correct placeholder', () => {
    render(<TextInput label="Test Label" placeholder="Enter text here" />);
    const inputElement = screen.getByPlaceholderText('Enter text here');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls the onChange handler when the input value changes', () => {
    const handleChange = vi.fn();
    render(<TextInput label="Test Label" placeholder="Enter text here" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText('Enter text here');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders the label if provided', () => {
    render(<TextInput placeholder="Enter text here" label="Test Label" />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });
});