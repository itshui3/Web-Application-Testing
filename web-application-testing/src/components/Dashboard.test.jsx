import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard';

it('renders dashboard component without crashing', () => {
  const wrapper = rtl.render(
    <Dashboard />
  );
  console.log(wrapper.debug());
});

// I want to test that there are 2 buttons and an h1 title
