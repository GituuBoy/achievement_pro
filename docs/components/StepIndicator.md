# StepIndicator Component

The `StepIndicator` component visually represents the progress through a series of steps. It displays the total number of steps and highlights the current active step, optionally showing labels for each step.

## Purpose

This component provides clear visual feedback to the user about their current position within a multi-step process, enhancing user experience and guiding them through workflows like onboarding forms or wizards.

## Props

The `StepIndicator` component accepts the following props:

| Prop Name | Type | Default | Description |
|---|---|---|---|
| `totalSteps` | `number` | `(required)` | The total number of steps in the process. |
| `currentStep` | `number` | `(required)` | The current active step (1-based index). |
| `labels` | `string[]` | `undefined` | An optional array of strings, where each string corresponds to a label for a step. The length of this array should match `totalSteps`. |

## Usage Examples

### Basic Usage (without labels)

```tsx
import React from 'react';
import StepIndicator from '../../frontend/src/components/common/StepIndicator';

const OnboardingProgress: React.FC = () => {
  const currentOnboardingStep = 2; // Example: user is on step 2 of 3

  return (
    <StepIndicator
      totalSteps={3}
      currentStep={currentOnboardingStep}
    />
  );
};

export default OnboardingProgress;
```

### With Labels

```tsx
import React from 'react';
import StepIndicator from '../../frontend/src/components/common/StepIndicator';

const CheckoutProcess: React.FC = () => {
  const currentCheckoutStep = 1;
  const stepLabels = ['Shipping', 'Payment', 'Review', 'Confirm'];

  return (
    <StepIndicator
      totalSteps={stepLabels.length}
      currentStep={currentCheckoutStep}
      labels={stepLabels}
    />
  );
};

export default CheckoutProcess;
```

## Test File

-   [`frontend/src/components/common/StepIndicator.test.tsx`](frontend/src/components/common/StepIndicator.test.tsx)