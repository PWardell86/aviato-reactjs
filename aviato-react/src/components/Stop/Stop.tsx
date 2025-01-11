import React from 'react';

import { Select, Button     } from '@mantine/core';

interface ItemProps {
    index: number;
    value1: string;
    value2: string;
    value3: string;
    onChange: (index: number, field: 'value1' | 'value2' | 'value3', value: string) => void;
}

export const Stop: React.FC<ItemProps> = ({ index, value1, value2, value3, onChange }) => {
    return (
        <div className="item">
            <Select
                label="Your favorite library"
                placeholder="Pick value"
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            <input
                type="text"
                value={value2}
                onChange={(e) => onChange(index, 'value2', e.target.value)}
                placeholder="Value 2"
            />
            <input
                type="text"
                value={value3}
                onChange={(e) => onChange(index, 'value3', e.target.value)}
                placeholder="Value 3"
            />
        </div>
    );
};
