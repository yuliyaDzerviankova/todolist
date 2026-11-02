import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import type { TodoItem } from "./TodoItem"
import type { FilterType } from "./TodoFilter"

export const useTodos = () => {
  const [list, setList] = useState<TodoItem[]>(() => {
    const listItems = localStorage.getItem("todoList")
    return listItems ? JSON.parse(listItems) : []
  })
  const [filter, setFilter] = useState<FilterType>("all")

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list))
  }, [list])

  const addItem = (title: string) => {
    const newItem: TodoItem = {
      id: uuidv4(),
      title,
      isCompleted: false
    }
    
    setList((prev) => [...prev, newItem])
  }

  const toggleItem = (id: string, isCompleted: boolean) => {
    setList((prev) =>
      prev.map((item) => item.id === id ? { ...item, isCompleted } : item)
    )
  }

  const removeItem = (id: string) => {
    const changedList = list.filter((item) => item.id !== id)
    setList(changedList)
  }

  const filteredList = list.filter((item) => {
    if (filter === "active") return !item.isCompleted
    if (filter === "completed") return item.isCompleted
    return item
  })

  return {
    addItem,
    toggleItem,
    removeItem,
    setFilter,
    filteredList,
    currentFilter: filter
  }
}