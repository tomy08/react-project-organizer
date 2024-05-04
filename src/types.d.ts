export type Card = {
  id: string
  title: string
  field: string
}
export interface CardsContextType {
  cards: Card[]
  setCards: React.Dispatch<React.SetStateAction<Card[]>>
}
