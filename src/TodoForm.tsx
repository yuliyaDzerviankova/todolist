type Props = {
  addItem: (value: string) => void
}

export const TodoForm = ({ addItem }: Props) => {
  const handleAction = (formData: FormData) => {
    const title = formData.get("task") as string

    if (!title || !title.trim()) return

    addItem(title.trim())
  }

  return (
    <section id="adding-form">
      <form  action={handleAction}>
        <input
          name="task"
          placeholder="Введите задачу..."
          maxLength={70}
        />
      <button type="submit">Добавить</button>
      </form>
    </section>
  )
}