/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const mockToggleModal = jest.fn();

describe('Modal is rendering', () => {
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

    })
    it('matches snapshot', () => {
        // arrange the snapshot = declare variable
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        // assert the match
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));
        // Assert: Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})  