import SectionDroppable from './section-droppable'
import TaskDraggable from './task-draggable'
import type { Card } from '../types'

const cards: Card[] = [
  { id: 'task-1', title: 'Task 1', field: 'todo' },
  { id: 'task-2', title: 'Task 2', field: 'todo' },
  { id: 'task-3', title: 'Task 3', field: 'todo' },
  { id: 'task-4', title: 'Task 4', field: 'in-progress' },
  { id: 'task-5', title: 'Task 5', field: 'in-progress' },
  { id: 'task-6', title: 'Task 6', field: 'in-progress' },
  { id: 'task-7', title: 'Task 7', field: 'done' },
  { id: 'task-8', title: 'Task 8', field: 'done' },
  { id: 'task-9', title: 'Task 9', field: 'done' },
]

export default function DndContainer() {
  return (
    <main className="p-4 w-full min-h-full grid grid-cols-3 gap-8">
      <SectionDroppable
        id="todo"
        title="Pending"
        bgColor="bg-blue-800"
        cards={cards}
      />

      <SectionDroppable
        id="in-progress"
        title="In progress"
        bgColor="bg-purple-800"
        cards={cards}
      />

      <SectionDroppable
        id="done"
        title="Completed"
        bgColor="bg-green-800"
        cards={cards}
      />
    </main>
  )
}
