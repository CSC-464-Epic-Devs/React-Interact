import React from 'react';
import { render } from '@testing-library/react';
import ContentBanner from '../ContentBanner';

// Check if component renders
describe('ContentBanner', () => {
    it('renders', () => {
        render(<ContentBanner />);
    });
});