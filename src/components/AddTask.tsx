import { useState, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { CardsContext } from '../context/KanbanContext'

type Props = {
  field: string
}

export default function PreviewNewTask({ field }: Props) {
  const { cards, setCards } = useContext(CardsContext)!
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return

    setCards([
      ...cards,
      {
        id: uuid(),
        title: value,
        field,
      },
    ])
    setValue('')
  }
  const handleAbort = () => {
    setValue('')
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
        value={value}
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