import React from 'react'
import { initialItemTypes } from '../App'

interface DeleteItemPropsType {
    onDeleteItem: (id: number) => void,
    onToggleItem: (id: number) => void,
    item: initialItemTypes
}

const Item: React.FC<DeleteItemPropsType> = ({ item, onDeleteItem, onToggleItem }) => {
    return (
        <div style={item.packed ? { textDecoration: 'line-through' } : {}}>
            <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
            <span className={item.packed ? 'line' : ""}>{item.quantity} {item.description}</span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </div>
    )
}

export default Item