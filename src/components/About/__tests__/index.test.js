import React from 'react';
import { render, cleanup} from '@testing-library/react';

// The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

// The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.

import '@testing-library/jest-dom/extend-expect';
// jest-dom offers access to custom matchers that are used to test DOM elements.

import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // renders About test
    // First test
    it('renders', () => {
        render(<About />);
    });
    // Second test
    // test case
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})