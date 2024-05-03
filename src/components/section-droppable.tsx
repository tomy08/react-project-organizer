import React from 'react'
import { useDroppable } from '@dnd-kit/core'

type SectionDroppableProps = {
  id: string
  children: React.ReactNode
}

export default function SectionDroppable({
  id,
  children,
}: SectionDroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  })
  const style = {
    color: isOver ? 'green' : undefined,
  }
  return (
    <section
      ref={setNodeRef}
      style={style}
      className="bg-slate-900 rounded-md flex justify-center items-center flex-col h-auto "
    >
      {children}
    </section>
  )
}
