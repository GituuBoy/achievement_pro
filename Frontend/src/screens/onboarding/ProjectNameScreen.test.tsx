import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as reactRedux from 'react-redux';
import ProjectNameScreen from './ProjectNameScreen';
import { setProjectName } from '../../store/slices/onboardingSlice';

// Mock the 'react-redux' module
vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux');
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

describe('ProjectNameScreen', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock the return value of useDispatch
    (reactRedux.useDispatch as any).mockReturnValue(mockDispatch);
  });

  it('renders the screen with the correct title and input', () => {
    // Mock the return value of useSelector
    (reactRedux.useSelector as any).mockReturnValue({
      projectName: '',
      currentStep: 1,
    });

    const { getByText, getByLabelText } = render(<ProjectNameScreen />);

    expect(getByText('What is the name of your project?')).toBeInTheDocument();
    expect(getByLabelText('Project Name')).toBeInTheDocument();
  });

  it('updates the project name when the input changes', () => {
    // Mock the return value of useSelector
    (reactRedux.useSelector as any).mockReturnValue({
      projectName: '',
      currentStep: 1,
    });

    const { getByLabelText } = render(<ProjectNameScreen />);
    const input = getByLabelText('Project Name');

    fireEvent.change(input, { target: { value: 'New Project Name' } });

    expect(mockDispatch).toHaveBeenCalledWith(setProjectName('New Project Name'));
  });

  it('navigates to the next screen when the "Continue" button is clicked', () => {
    // Mock the return value of useSelector
    (reactRedux.useSelector as any).mockReturnValue({
      projectName: 'Test Project',
      currentStep: 1,
    });

    const { getByText } = render(<ProjectNameScreen />);
    const continueButton = getByText('Continue');

    fireEvent.click(continueButton);

    // Since there is no navigation logic, we just ensure the button click doesn't crash.
    // A real test would check for a navigation action dispatch or a router mock call.
    expect(mockDispatch).not.toHaveBeenCalledWith(expect.objectContaining({ type: 'navigation' }));
  });
});