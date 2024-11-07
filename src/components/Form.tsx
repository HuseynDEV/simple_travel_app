import React, { useState } from 'react'

export interface newItemType {
  description: string,
  quantity: number,
  packed: boolean,
  id: number

}

interface FormProps {
  onAddItems: (item: newItemType) => void;
}

const Form:React.FC<FormProps> = ({ onAddItems }) => {
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) return;

    const newItem: newItemType = {
      description,
      quantity,
      packed: false,
      id: Number(Date.now()),
    };

    onAddItems(newItem);
    setDescription('');
    setQuantity(1);
  };
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default Form