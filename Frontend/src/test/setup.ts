import { vi } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('*.jpg', () => ({
  default: 'mock-image.jpg',
}));

vi.mock('*.png', () => ({
  default: 'mock-image.png',
}));