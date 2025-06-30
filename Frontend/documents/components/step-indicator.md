# StepIndicator Component

This document describes the `StepIndicator` component, which visually represents the user's progress through a multi-step process, such as an onboarding flow.

## Purpose

The `StepIndicator` component provides clear visual feedback to the user about their current position within a sequence of steps. It enhances user experience by making long processes feel more manageable.

## Props

The `StepIndicatorProps` interface defines the properties accepted by this component:

```typescript
interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
}
```

*   `totalSteps`: (Required) A number indicating the total number of steps in the process.
*   `currentStep`: (Required) A number indicating the currently active step (1-based index).

## Usage

The component is typically used at the top of multi-step forms or screens to guide the user.

```typescript
import React from 'react';
import StepIndicator from './StepIndicator'; // Adjust path as necessary

const OnboardingFlow = () => {
  const totalOnboardingSteps = 4;
  const currentOnboardingStep = 2; // Assuming the user is on the second step

  return (
    <div>
      <StepIndicator totalSteps={totalOnboardingSteps} currentStep={currentOnboardingStep} />
      {/* Content for the current step */}
    </div>
  );
};

export default OnboardingFlow;
```

## Styling

The component uses Tailwind CSS for its visual presentation. Each step is represented by a circular element.

*   **Active Step:** The circle for the `currentStep` is styled with a blue background (`bg-blue-500`) and white text (`text-white`).
*   **Inactive Steps:** Other steps are styled with a light gray background (`bg-gray-300`).
*   **Connectors:** A thin gray line (`w-12 h-1 bg-gray-300`) connects the step circles, visually indicating progression.
*   **Layout:** The steps are arranged horizontally and centered using flexbox (`flex justify-center items-center my-4`).

## File Location

[`achievement-project/src/components/common/StepIndicator.tsx`](achievement-project/src/components/common/StepIndicator.tsx)