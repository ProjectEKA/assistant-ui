import React from 'react';
import { render } from '@testing-library/react';
import AdminSettings from '../AdminSettings.view';
import StateContext from '../../../store/StateContext';

describe('AdminSettings', () => {
  describe('HTML Structure', () => {
    it('should render properly', () => {
      const mockState = { name: 'Demo' };
      const { asFragment } = render(
        <StateContext.Provider value={[mockState]}>
          <AdminSettings />
        </StateContext.Provider>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
