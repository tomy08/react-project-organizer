import Kanban from './components/Kanban'
import { ContextProvider } from './context/KanbanContext'

export default function App() {
  return (
    <ContextProvider>
      <Kanban />
    </ContextProvider>
  )
}
