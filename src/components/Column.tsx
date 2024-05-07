import React, { useContext } from 'react'
import Task from './TaskDraggable'
import AddTask from './AddTask'
import { CardsContext } from '../context/KanbanContext'

type SectionDroppableProps = {
  id: string
  title: string
  bgColor: string
}

export default function Column({ id, title, bgColor }: SectionDroppableProps) {
  const { cards, setCards } = useContext(CardsContext)!

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const cardId = event.dataTransfer.getData('text/plain')
    const card = cards.find((c) => c.id === cardId)

    if (card && card.field !== id) {
      const updatedCard = { ...card, field: id }
      setCards(cards.map((c) => (c.id === cardId ? updatedCard : c)))
    } else if (card && card.field === id) {
      const updatedCards = [...cards]
      const draggedCardIndex = updatedCards.findIndex((c) => c.id === cardId)
      const draggedCard = updatedCards[draggedCardIndex]

      updatedCards.splice(draggedCardIndex, 1)

      const dropIndex = updatedCards.findIndex((c) => c.id === cardId)

      const rect = event.currentTarget.getBoundingClientRect()
      const mouseY = event.clientY - rect.top
      const cardHeight = rect.height / updatedCards.length
      let insertionIndex = Math.floor(mouseY / cardHeight)

      if (insertionIndex < dropIndex) {
        insertionIndex -= 1
      } else if (insertionIndex === dropIndex) {
        return
      } else {
        insertionIndex += 1
      }

      updatedCards.splice(insertionIndex, 0, draggedCard)

      setCards(updatedCards)
    }
  }

  return (
    <section
      className="bg-slate-900 rounded-md flex flex-col min-w-44 "
      onDrop={handleDrop}
    >
      <header
        className={`p-1 text-center font-bold w-full ${bgColor} rounded-t-md`}
      >
        {title}
      </header>
      <div className="p-2 gap-2 w-full flex justify-center items-center flex-col">
        {cards
          .filter((card) => card.field === id)
          .map((card) => (
            <Task key={card.id} card={card} />
          ))}
        <AddTask field={id} />
      </div>
    </section>
  )
}
