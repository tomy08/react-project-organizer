import TaskDraggable from './task-draggable'
import type { Card } from '../types'
import AddTask from './add-task'

type SectionDroppableProps = {
  id: string

  title: string
  bgColor: string
  cards: Card[]
}

export default function SectionDroppable({
  id,
  title,
  bgColor,
  cards,
}: SectionDroppableProps) {
  return (
    <section className="bg-slate-900 rounded-md flex justify-center items-center flex-col h-auto ">
      <header
        className={`p-1 text-center font-bold w-full ${bgColor} rounded-t-md`}
      >
        {title}
      </header>
      <div className="p-2 gap-2 w-full flex justify-center items-center flex-col">
        {cards.map(
          (card) =>
            card.field === id && (
              <TaskDraggable key={card.id} id={card.id} title={card.title} />
            )
        )}

        <AddTask />
      </div>
    </section>
  )
}
