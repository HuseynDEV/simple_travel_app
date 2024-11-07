import { newItemType } from "./Form"

const Stats = ({ items }: { items: newItemType[] }) => {

  if(!items.length){
    return(
      <p className="stats">
        Start to add some items in your packing list
      </p>
    )
  }

  const numItems = items.length
  const numPacked = items.filter(item => item.packed).length
  const percentage = Math.round((numPacked / numItems) * 100)

  return (
    <footer className='stats'>
      <em>You have {numItems} items on your list, and you already packed {numPacked} ({percentage}%)</em>
    </footer>
  )
}

export default Stats

