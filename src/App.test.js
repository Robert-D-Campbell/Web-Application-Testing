import React from 'react';
import {render} from '@testing-library/react'
import App from './App';
import Dashboard, { setStrike, strike } from './components/Dashboard'

test('renders without crashing', () => {
  render(<App />);
});


test('it displays a button with the text Strike', () => {
  const {getByText}  = render(<App />);
  getByText(/strike/i);
});

test('it displays a button with the text Ball', () => {
  const {getByText}  = render(<App />);
  getByText(/ball/i);
});
test('it displays a button with the text Foul', () => {
  const {getByText}  = render(<App />);
  getByText(/foul/i);
});
test('it displays a button with the text Hit', () => {
  const {getByText}  = render(<App />);
  getByText(/hit/i);
});