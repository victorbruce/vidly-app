import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import renderer from 'react-test-renderer';

test('snapshot App', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
