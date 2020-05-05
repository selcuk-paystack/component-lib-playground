import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
    let props: any;

    const renderComponent = () => render(<Button {...props} />);

    describe('Snapshots', () => {
        it('should be visible', () => {
            const { getByTestId } = renderComponent();
            const button = getByTestId('test-button');

            expect(button).toBeVisible();
        });
    });
});
