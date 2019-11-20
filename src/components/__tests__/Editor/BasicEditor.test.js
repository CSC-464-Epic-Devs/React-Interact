import React from 'react';
import { render } from '@testing-library/react';
import BasicEditor from '../../Editor/basicEditor';

// Check if component renders
it('renders', () => {
  render(<BasicEditor />);
});
