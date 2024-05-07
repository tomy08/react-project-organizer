import React, { useState } from 'react'
import { Card } from '../types'
import DotsVertical from './svg/DotsVertical'
import TaskSetting from './TaskSetting'

type TaskDraggableProps = {
  card: Card
}

export default function TaskDraggable({ card }: TaskDraggableProps) {
  const { id, title, badges } = card
  const [isSetting, setIsSetting] = useState(false)
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', id)
  }

  const handleSetting = () => {
    setIsSetting((prev) => !prev)
  }

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        className="w-[95%] bg-slate-800 text-white rounded-md text-left p-2 active:cursor-grabbing relative"
      >
        {title}
        {badges.length > 0 && (
          <div className="gap-2 mt-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="bg-slate-700 text-white text-xs p-1 px-2 rounded-md mr-2 "
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <button
          className="absolute top-0 right-0 mt-2 mr-2"
          onClick={handleSetting}
        >
          <DotsVertical />
        </button>
      </div>
      {isSetting && <TaskSetting card={card} handleDisplay={handleSetting} />}
    </>
  )
}
