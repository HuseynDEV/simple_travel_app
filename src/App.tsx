import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import { newItemType } from './components/Form'


export type initialItemTypes = {
  id: number,
  description: string,
  quantity: number,
  packed: boolean
}


const initialItems: initialItemTypes[] = [
  { id: 1, description: "Pasport", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true }
]


const App = () => {
  const [items, setItems] = useState<newItemType[]>(initialItems)


  const handleAddItems = (item: newItemType) => {
    setItems(items => [...items, item])
  }

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleItem = (id: number) => {
    console.log(id);
    setItems(items => items.map(item => item.id == id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearList=()=>{
    setItems([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}  handleClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  )
}

export default App