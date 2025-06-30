import React from 'react';

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
  labels?: string[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ totalSteps, currentStep, labels }) => {
  return (
    <div className="flex justify-center items-start my-4">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center w-20">
            <div
              data-testid="step-circle"
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === currentStep ? 'bg-primary text-white' : 'bg-gray-300'
              }`}
            >
              {step}
            </div>
            {labels && labels[index] && (
              <div className="mt-2 text-sm text-center">{labels[index]}</div>
            )}
          </div>
          {step < totalSteps && <div className="w-12 h-1 bg-gray-300 mt-4" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;