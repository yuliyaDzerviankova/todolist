import "./App.css"
import { TodoForm } from "./TodoForm"
import { TodoFilter } from "./TodoFilter"
import { TodoItem } from "./TodoItem"
import { useTodos } from "./useTodos"

function App() {
  const {
    addItem,
    currentFilter,
    setFilter,
    filteredList,
    removeItem,
    toggleItem
  } = useTodos()

  return (
    <main>
      <TodoForm addItem={addItem} />

      <TodoFilter currentFilter={currentFilter} onFilterChange={setFilter} />

      <section id="list">
        {filteredList.map((item: TodoItem) => (
          <TodoItem item={item} onRemove={removeItem} onToggle={toggleItem} />
        ))}
      </section>
    </main>
  )
}

export default App
