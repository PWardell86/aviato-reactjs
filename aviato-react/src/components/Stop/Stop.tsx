import { useState } from 'react';

import { Button, Textarea } from '@mantine/core';
import { SearchableSelect } from '../../ui/SearchableSelect';

import { IconArrowUp, IconArrowDown } from '@tabler/icons-react'

interface ItemProps {
    id: number;
}

export function Stop(props: ItemProps) {
    const [ID, setID] = useState(0);

    return (
        <div className="max-w-xl grid grid-cols-12 mx-auto mt-3 p-3 bg-white">
            <div className="my-auto col-span-1 grid grid-cols-1 max-w-sm mr-1">
                <Button className="mb-4 !p-0">
                    <IconArrowUp></IconArrowUp>
                </Button>
                <Button className='!p-0'>
                    <IconArrowDown></IconArrowDown>
                </Button>
            </div>
            <div className="col-span-11 grid-cols-2 grid">
                <SearchableSelect items={['United States of America', 'Canada', 'Mexico']} className="mr-2" placeholder='Search for country' />
                <SearchableSelect items={['United States of America', 'Canada', 'Mexico']} className="ml-2" placeholder='Search for city' />
                <Textarea
                    placeholder="Activity ideas or plans"
                    className="col-span-2 mt-3"
                    minRows={5}
                />
            </div>
        </div>
    );
};
