import React, { useState } from 'react'
import { initialItemTypes } from '../App'
import Item from './Item'

interface DeleteItemType {
  onDeleteItem: (id: number) => void,
  onToggleItem: (id: number) => void,
  handleClearList: () => void,
  items: initialItemTypes[]
}

const PackingList: React.FC<DeleteItemType> = ({ items, onDeleteItem, onToggleItem, handleClearList }) => {
  console.log(items, 'items');
  const [sortBy, setSortBy] = useState<string>('input')

  let sortedItems: initialItemTypes[] | undefined;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className='list'>
      <ul>
        {sortedItems?.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  )
}

export default PackingList