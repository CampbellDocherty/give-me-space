import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When the app renders', () => {
  test('it shows links', () => {
    render(<App />);
    screen.getByText('Home');
    screen.getByText('About');
  });
});
