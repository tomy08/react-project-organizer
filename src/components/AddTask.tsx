import { useState, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { CardsContext } from '../context/KanbanContext'

type Props = {
  field: string
}

export default function AddTask({ field }: Props) {
  const { cards, setCards } = useContext(CardsContext)!
  const [value, setValue] = useState('')
  const [badge, setBadge] = useState<string[]>([]) // Estado para el array de badges

  const addTask = () => {
    setCards([
      ...cards,
      {
        id: uuid(),
        title: value,
        field,
        badges: badge,
      },
    ])
    setValue('')
    setBadge([]) // Limpia el array de badges después de agregar la tarea
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return

    addTask()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value) {
      e.preventDefault()
      addTask()
    }
  }

  const handleAbort = () => {
    setValue('')
    setBadge([])
  }

  const handleBadgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Divide el valor de los badges separados por comas en un array
    const badgesArray = e.target.value.split(',').map((badge) => badge.trim())
    setBadge(badgesArray)
  }

  return (
    <form
      className="w-full flex justify-center items-center flex-col"
      onSubmit={handleSubmit}
    >
      <input
        className="w-[95%] border-2 border-slate-800 bg-transparent text-white rounded-md text-left p-2"
        placeholder="Add new task..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />

      <input
        className={`${
          value ? '' : 'hidden'
        } w-[95%] border-2 border-slate-800 bg-transparent text-white rounded-md text-left p-2 mt-4`}
        placeholder="Add badge (separate multiple badges with commas)..."
        onChange={handleBadgeChange}
        value={badge.join(', ')} // Muestra los badges separados por comas en el input
      />

      <div
        className={`${
          value ? 'flex' : 'hidden'
        } justify-end items-center w-full py-2 px-4 gap-2`}
      >
        <button
          className="bg-none hover:bg-slate-700 text-white p-2 rounded-md"
          onClick={handleAbort}
        >
          Close
        </button>
        <button className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-md">
          Add +
        </button>
      </div>
    </form>
  )
}
