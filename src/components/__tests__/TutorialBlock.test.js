import React from 'react';
import { render } from '@testing-library/react';
import TutorialBlock from '../TutorialBlock';

// Check if component renders
describe("TutorialBlock", () => {
    it("renders correctly", () => {
        render(<TutorialBlock />)
    });
});