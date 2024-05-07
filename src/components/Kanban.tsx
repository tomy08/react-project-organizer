import { useEffect, useContext } from 'react'
import { CardsContext } from '../context/KanbanContext'

import Column from './Column'

export default function Kanban() {
  const { cards, setCards } = useContext(CardsContext)!
  useEffect(() => {
    const data = localStorage.getItem('cards')
    if (data) {
      const cards = JSON.parse(data)
      setCards(cards)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])
  return (
    <main className="p-4 w-full min-h-full grid md:grid-cols-3 grid-cols-1 md:gap-8 sm:gap-4 gap-2">
      <Column id="todo" title="Pending" bgColor="bg-blue-800" />
      <Column id="in-progress" title="In progress" bgColor="bg-purple-800" />
      <Column id="done" title="Completed" bgColor="bg-green-800" />
    </main>
  )
}
