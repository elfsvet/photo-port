import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        // assert the match
        // expect{getByText}
    })
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        // Act: Simulate click event
        // Assert: Expected matcher
    });
})  