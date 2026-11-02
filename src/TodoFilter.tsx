import type { ChangeEvent } from "react"

export type FilterType = "all" | "active" | "completed"

type Props = {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

export const TodoFilter = ({ currentFilter, onFilterChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onFilterChange(event.target.value as FilterType)

  return (
    <section id="filter">
      {(["all", "active", "completed"] as const).map((type: string) => (
        <div className="item" key={type}>
          <input
            type="radio"
            name="filter"
            value={type}
            id={type}
            checked={currentFilter === type}
            onChange={handleChange}
          />
          <label htmlFor={type}>
            {type === "all" && "Все"}
            {type === "completed" && "Выполненные"}
            {type === "active" && "Невыполненные"}
          </label>
        </div>
      ))}
    </section>
  )
}