import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
};

export const Primary = () => <Button type="primary">Primary</Button>;

export const Default = () => <Button>Default</Button>;

export const Disabled = () => (
    <Button type="primary" disabled>
        Disabled
    </Button>
);
