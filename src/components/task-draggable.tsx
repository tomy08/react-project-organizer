import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

type TaskDraggableProps = {
  id: string
  children: React.ReactNode
}

export default function TaskDraggable({ children, id }: TaskDraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  })
  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-[95%] bg-slate-800 text-white rounded-md text-left pl-1"
    >
      {children}
    </button>
  )
}
