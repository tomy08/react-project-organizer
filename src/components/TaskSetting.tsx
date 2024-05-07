import { useContext } from 'react'
import { CardsContext } from '../context/KanbanContext'
import { Card } from '../types'

type TaskSettingProps = {
  card: Card
  handleDisplay: () => void
}

export default function TaskSetting({ card, handleDisplay }: TaskSettingProps) {
  const { cards, setCards } = useContext(CardsContext)!

  const handleSave = (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault()
    const title = (form.currentTarget[0] as HTMLInputElement).value
    const badges = (form.currentTarget[1] as HTMLInputElement).value
      .split(',')
      .map((badge) => badge.trim())
    const updatedCards = cards.map((c) => {
      if (c.id === card.id) {
        return {
          ...c,
          title,
          badges,
        }
      }
      return c
    })
    setCards(updatedCards)
    handleDisplay()
  }

  const handleDelete = () => {
    const updatedCards = cards.filter((c) => c.id !== card.id)
    setCards(updatedCards)
  }
  return (
    <form
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 z-40 p-4"
      onSubmit={handleSave}
      onClick={handleDisplay}
    >
      <div
        className="bg-slate-900 p-4 rounded shadow-lg space-y-4 sm:min-w-96 min-w-52"
        onClick={(e) => e.stopPropagation()}
      >
        <label className="block text-lg font-semibold">Title</label>
        <input
          type="text"
          className="w-full border-2 border-slate-800 bg-transparent text-white rounded-md text-left p-2"
          defaultValue={card.title}
          placeholder="Add title..."
        />
        <label className="block text-lg font-semibold">Badges</label>
        <input
          type="text"
          className="w-full border-2 border-slate-800 bg-transparent text-white rounded-md text-left p-2"
          defaultValue={card.badges}
          placeholder="Add badge (separate multiple badges with commas)..."
        />
        <div className="flex justify-end space-x-2">
          <button
            className="text-white bg-blue-500 p-2 rounded-md transition duration-200 ease-in-out hover:bg-blue-600"
            type="submit"
          >
            Save
          </button>
          <button
            className="text-white bg-yellow-500 p-2 rounded-md transition duration-200 ease-in-out hover:bg-yellow-600"
            onClick={handleDisplay}
          >
            Cancel
          </button>
          <button
            className="text-white bg-red-500 p-2 rounded-md transition duration-200 ease-in-out hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  )
}
