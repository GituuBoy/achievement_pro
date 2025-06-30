# TextInput Component

This document describes the reusable `TextInput` component, a common UI element for accepting text input from the user.

## Purpose

The `TextInput` component provides a standardized and styled input field for text-based data entry across the application. It encapsulates common styling and behavior for text inputs.

## Props

The `TextInput` component extends standard HTML `input` attributes and adds a specific `label` prop:

```typescript
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
```

*   `label`: (Required) A string that serves as the visual label for the input field.
*   `...props`: All other standard HTML `input` attributes (e.g., `id`, `name`, `value`, `onChange`, `placeholder`, `type`, `className`, etc.) can be passed directly to the underlying `input` element.

## Usage

The component is designed for straightforward integration into forms or any section requiring user text input.

```typescript
import React from 'react';
import TextInput from './TextInput'; // Adjust path as necessary

const MyForm = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <TextInput
        label="Enter Your Name"
        id="user-name"
        name="userName"
        value={inputValue}
        onChange={handleChange}
        placeholder="e.g., John Doe"
        type="text"
      />
      {/* Other form elements */}
    </form>
  );
};

export default MyForm;
```

## Styling

The component uses Tailwind CSS for styling, applying a consistent look and feel for input fields. It includes:
*   A `div` wrapper with `mb-4` for margin-bottom.
*   A `label` with `block`, `text-gray-700`, `text-sm`, `font-bold`, and `mb-2`.
*   An `input` element with `shadow`, `appearance-none`, `border`, `rounded`, `w-full`, `py-2`, `px-3`, `text-gray-700`, `leading-tight`, `focus:outline-none`, and `focus:shadow-outline`.

## File Location

[`achievement-project/src/components/common/TextInput.tsx`](achievement-project/src/components/common/TextInput.tsx)