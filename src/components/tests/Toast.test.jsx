import React from 'react';
import { render } from '../../utils/tests/testUtils';
import { TOAST } from '../../utils/tests/testIDs';
import Toast from '../Toast';
import { View } from 'react-native-web';

it('Should render the toast if visible prop is true', () => {
  const { queryByText, queryByTestId } = render(
    <Toast
      visible
      test="ceci est un test"
      icon={<View style={{ height: 10, width: 10 }} />}
      style={{ alignItems: 'center' }}
    />
  );

  // Should render the ElevatedView
  expect(queryByTestId(TOAST)).not.toBeNull();

  // Should display the text
  expect(queryByText('ceci est un test')).not.toBeNull();
});
