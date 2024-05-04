import React from 'react'

type TaskDraggableProps = {
  id: string

  title: string
}

export default function TaskDraggable({ id, title }: TaskDraggableProps) {
  return (
    <div
      draggable
      className="w-[95%] bg-slate-800 text-white rounded-md text-left p-2 active:cursor-grabbing"
    >
      {title}
    </div>
  )
}
