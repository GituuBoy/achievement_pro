# Redux Slices

This document will detail the various Redux slices used for state management within the Achievement Project.

## Overview

Redux slices are a feature of Redux Toolkit that allow you to define a reducer, its initial state, and associated actions in a single file. This promotes better organization and reduces boilerplate code.

## Available Slices

### Onboarding Slice

The `onboardingSlice` manages the state related to the user onboarding process, including the project name and current step.
For more details, refer to the [Onboarding Slice Documentation](onboarding-slice.md).

## Creating a New Slice

When creating a new slice, consider the following structure:

*   **`name`**: A string name for the slice, used in action types.
*   **`initialState`**: The initial state value for this slice of the Redux store.
*   **`reducers`**: An object of functions, where each function is a "case reducer" that handles a specific action type.
*   **`extraReducers`** (optional): An object or a function that allows the slice to respond to action types not defined in `reducers` (e.g., actions from other slices or async thunks).

## Code Snippet Example

```javascript
// Example: src/store/slices/counterSlice.js (or .ts)
// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;