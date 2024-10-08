import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('When the app renders', () => {
  test('it shows links', () => {
    render(<App />);
    screen.getByText('Home');
    screen.getByText('About');
    screen.getByText('Press');
  });

  test('it goes home when home is clicked', () => {
    render(<App />);
    const home = screen.getByText('Home');
    fireEvent.click(home);
    expect(getComputedStyle(home).textDecoration).toBe('underline');
  });

  test('it goes to about when about is clicked', () => {
    render(<App />);
    const about = screen.getByText('About');
    fireEvent.click(about);
    expect(getComputedStyle(about).textDecoration).toBe('underline');
  });

  test('it goes home when logo is clicked', () => {
    render(<App />);
    const about = screen.getByText('Press');
    fireEvent.click(about);
    const logo = screen.getByAltText('logo');
    fireEvent.click(logo);
    const home = screen.getByText('Home');
    expect(getComputedStyle(home).textDecoration).toBe('underline');
  });

  test('it goes about when about is clicked', () => {
    render(<App />);
    const about = screen.getByText('Press');
    fireEvent.click(about);
    expect(getComputedStyle(about).textDecoration).toBe('underline');
  });
});
