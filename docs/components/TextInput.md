# TextInput Component

The `TextInput` component is a reusable UI element for capturing single-line text input from the user. It includes a label associated with the input field for better accessibility and user guidance.

## Purpose

This component provides a standardized and styled text input field with a clear label, promoting consistency across the application's forms.

## Props

The `TextInput` component extends standard HTML `input` attributes and adds one specific prop:

| Prop Name | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `(required)` | The text to be displayed as the label for the input field. |
| `...props` | `React.InputHTMLAttributes<HTMLInputElement>` | N/A | All standard HTML input attributes (e.g., `id`, `name`, `type`, `value`, `onChange`, `placeholder`, `readOnly`, `disabled`, etc.) are supported and passed directly to the underlying `input` element. |

## Usage Examples

### Basic Usage

```tsx
import React, { useState } from 'react';
import TextInput from '../../frontend/src/components/common/TextInput';

const MyForm: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <TextInput
      label="Your Name"
      id="nameInput"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
};

export default MyForm;
```

### With a specific input type (e.g., password)

```tsx
import React, { useState } from 'react';
import TextInput from '../../frontend/src/components/common/TextInput';

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState('');

  return (
    <TextInput
      label="Password"
      id="passwordInput"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
    />
  );
};

export default LoginForm;
```

## Test File

-   [`frontend/src/components/common/TextInput.test.tsx`](frontend/src/components/common/TextInput.test.tsx)