import { useState, createContext, useEffect } from 'react'

import type { Card, CardsContextType } from '../types'

export const CardsContext = createContext<CardsContextType | null>(null)

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    const data = localStorage.getItem('cards')
    if (data) {
      const cards = JSON.parse(data)
      setCards(cards)
    } else {
      localStorage.setItem('cards', JSON.stringify([]))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  )
}
