import { describe, it, expect } from 'vitest';
import onboardingReducer, { setProjectName, setCurrentStep } from './onboardingSlice';

describe('onboarding slice', () => {
  const initialState = {
    projectName: '',
    currentStep: 1,
  };

  it('should handle initial state', () => {
    expect(onboardingReducer(undefined, { type: 'unknown' })).toEqual({
      projectName: '',
      currentStep: 1,
    });
  });

  it('should handle setProjectName', () => {
    const actual = onboardingReducer(initialState, setProjectName('Test Project'));
    expect(actual.projectName).toEqual('Test Project');
  });

  it('should handle setCurrentStep', () => {
    const actual = onboardingReducer(initialState, setCurrentStep(2));
    expect(actual.currentStep).toEqual(2);
  });
});