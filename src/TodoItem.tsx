import { BiTrash } from "react-icons/bi"

export type TodoItem = {
  id: string
  title: string
  isCompleted: boolean
}

type Props = {
  item: TodoItem
  onToggle: (id: string, isCompleted: boolean) => void
  onRemove: (id: string) => void
}

export const TodoItem = ({ item, onRemove, onToggle }: Props) => (
  <div key={item.id} className={`task ${item.isCompleted ? "completed" : "active"}`}>
    <input
      type="checkbox"
      checked={item.isCompleted}
      onChange={(event) => onToggle(item.id, event.target.checked)}
    />
    <p>{item.title}</p>
    <button onClick={() => onRemove(item.id)}>
      <BiTrash />
    </button> 
  </div>
)