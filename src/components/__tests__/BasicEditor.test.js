import React from 'react';
import { render } from '@testing-library/react';

import BasicEditor from '../BasicEditor';

describe('BasicEditor', () => {
    it('renders correctly', () => {
        render(<BasicEditor />);
    });
});