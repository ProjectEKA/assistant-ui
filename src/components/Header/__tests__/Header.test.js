import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header', function () {
  describe('HTML Structure', () => {
    it('should render properly', () => {
      const { asFragment } = render(<Header />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
