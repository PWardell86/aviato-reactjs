import { useState } from 'react';
import { Stop } from '../../components/Stop/Stop'

import { Button } from '@mantine/core';

interface FormData {
  country: string;
  city: string;
  activity: string[];
}

export function Plan () {
  const [items, setItems] = useState<FormData[]>([{ country: '', city: '', activity: [] }]);

  const handleSubmit = () => {
    // Send a request with the state values
    console.log('Sending request with:', items);

    // Example: Sending POST request
    // fetch('/api/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(items),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
  };

  const addItem = () => {
    setItems([...items, { country: '', city: '', activity: [] }]);
  };

  return (
    <div className="bg-opacity-90 bg-slate-200 m-auto align-middle w-[40vw] h-[95vh] rounded-2xl">
      {items.map((item, index) => (
        <>
        <Stop
        id={index}
        />
        </>
      ))}
    </div>
  );
};
