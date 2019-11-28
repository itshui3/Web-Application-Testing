import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';

it('renders display component without crashing', () => {
  const wrapper = rtl.render(
    <Display />
  );
  console.log(wrapper.debug());
});

// I need to test that there is 3 elements in display, two h3's and 1 h1 
// The h1 will read "At Bat"
// The h3's will read "Balls" and "Strikes"