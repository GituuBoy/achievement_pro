import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
  projectName: string;
  currentStep: number;
}

const initialState: OnboardingState = {
  projectName: '',
  currentStep: 1,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setProjectName(state, action: PayloadAction<string>) {
      state.projectName = action.payload;
    },
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
  },
});

export const { setProjectName, setCurrentStep } = onboardingSlice.actions;
export default onboardingSlice.reducer;