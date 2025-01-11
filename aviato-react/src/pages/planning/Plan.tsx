import React, { useState } from 'react';
import { Stop } from '../../components/Stop/Stop'

interface FormData {
  value1: string;
  value2: string;
  value3: string;
}

export const Plan: React.FC = () => {
  const [items, setItems] = useState<FormData[]>([{ value1: '', value2: '', value3: '' }]);

  const handleInputChange = (index: number, field: 'value1' | 'value2' | 'value3', value: string) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };
    setItems(updatedItems);
  };

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
    setItems([...items, { value1: '', value2: '', value3: '' }]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <Stop
          key={index}
          index={index}
          value1={item.value1}
          value2={item.value2}
          value3={item.value3}
          onChange={handleInputChange}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
