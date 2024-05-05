import { useState, createContext } from 'react'

import type { Card, CardsContextType } from '../types'

export const CardsContext = createContext<CardsContextType | null>(null)

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const data = localStorage.getItem('cards')

  const [cards, setCards] = useState<Card[]>(data ? JSON.parse(data) : [])

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  )
}
